import { RefObject, useCallback, useEffect, useState } from "react";
import useMountedState from "./useMountedState";

type VisiblityState = "visible" | "hidden";

interface InViewOptions {
  root?: RefObject<HTMLElement | Element> | Document;
  threshold?: number[] | number;
  rootMargin?: string;

  /**
   * when set this option to true will not unobserve a target when it been observered
   */
  reobserve?: boolean;
}

/**
 * a hook indecates a visiblity state of an element
 * @param target - the target element that will be tracked
 * @param callback if it presents, will invoke it when the target being visible on the viewport or within the root
 *
 * * NOTE!: this hook requires basic knowldege of intersectionObserver API's, make sure to be aware about it
 * @see [intersectionObserver-MDN-Ref](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
 * @unstable
 */

export default function useInView(
  target: RefObject<HTMLElement | undefined>,
  callback?: VoidFunction,
  {
    reobserve = true,
    threshold = 0,
    root = document,
    rootMargin = "0px",
  }: InViewOptions = {}
) {
  const [visibleState, setVisibleState] =
    useMountedState<VisiblityState>("hidden");

  //* create memo version of the given callback to save performance
  const memoCallback = useCallback(() => {
    callback!();
  }, []);

  useEffect(() => {
    if (target.current) {
      const observer: IntersectionObserver = new IntersectionObserver(
        (e) => {
          e.forEach((item) => {
            if (item.isIntersecting) {
              setVisibleState("visible");
              if (memoCallback) memoCallback();
              if (!reobserve) observer.unobserve(target.current!);
              else return;
            } else {
              setVisibleState("hidden");
            }
          });
        },
        {
          threshold,
          root: root && "current" in root ? root.current : root,
          rootMargin,
        }
      );
      observer.observe(target.current);

      return () => {
        if (target.current) {
          observer.unobserve(target.current);
        }
      };
    }
  }, [visibleState]);

  return visibleState;
}
