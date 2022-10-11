import { RefObject, useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import useMountedState from "./useMountedState";

//TODO: make this hook compitible with refs and html elements

/**
 * a hook accepts a element to indecates if this element is hovered or not
 * @param element
 * @param callback if presents, will fire when element being hovered
 * * maybe this hook would re-render your component, if it causes problems or unexpected behaviors, make issue on github
 * @return  isHovered that indecates the hovered state of the element
 * @stable
 */
function useHover<T extends HTMLElement = HTMLElement>(
  element: RefObject<T>,
  callback?: () => void
) {
  // TODO: Maybe will change the state into ref
  const [isHovered, setIsHovered] = useMountedState(false);

  //   const targetEl: T | HTMLElement =
  //     element && "current" in element ? element.current : element ?? null;

  const memoCallback = useCallback(() => {
    callback && callback();
  }, []);

  const onHover = useCallback(() => {
    setIsHovered(true);
    if (memoCallback) {
      return memoCallback();
    }
    return;
  }, []);

  const onUnHover = useCallback(() => {
    setIsHovered(false);
    return;
  }, []);

  useEventListener("mouseover", onHover, element);
  useEventListener("mouseleave", onUnHover, element);

  return isHovered;
}

export default useHover;
