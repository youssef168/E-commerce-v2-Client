import React, { RefObject, useEffect } from "react";
import useIsMounted from "./useIsMounted";
// import { err } from "./utils/functions";

/**
 * hook use to treggers some element and raise a function when some event emits, the same as event listener
 * * this hook probably would make troubles when it run on the server
 *
 * @unstable
 */
function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement
>(
  eventName: KW | KH,
  // make sure that handler carry on the event that identical with the event name
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event
  ) => void,
  element?: RefObject<T>,
  options?: AddEventListenerOptions
) {
  // store the handler in a ref
  const savedHandler = React.useRef(handler);
  // create mounted flag to make sure that listener will set only when component is mounted
  const mounted = useIsMounted();

  React.useEffect(() => {
    // update the handler with the current
    savedHandler.current = handler;
  }, [handler]);

  // create a target that return the element if found, otherwise will return the global object

  const eventHandler: typeof handler = (event) => savedHandler.current(event);

  React.useEffect(() => {
    const target: T | Window = element?.current || window;
    if (mounted) {
      if (!(target && target.addEventListener)) {
        console.error("seems like the target doesn't support addEventListener");
      }

      target.addEventListener(eventName, eventHandler, options);
    }

    // removes event listener on unmount
    return () => {
      target.removeEventListener(eventName, eventHandler, options);
    };
  }, []);
}

export default useEventListener;
