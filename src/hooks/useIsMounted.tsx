import { useEffect, useRef } from "react";

/**
 * a simple hook detected if the current component is mounted or not.
 * mainly used to make a boolean flag to prevent memory leaks
 * @returns true if the component is mounted, false if it's unmounted
 */
function useIsMounted() {
  let isMounted = useRef<boolean>(true);
  useEffect(() => {
    isMounted.current = true;
    /**
     * this will trigger the component unmount then will mutate the ref to false
     * * use ref to prevent the variable is lost after each render
     */
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
}

export default useIsMounted;
