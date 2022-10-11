import { useEffect } from "react";

/**
 * a hook requires a function to be excuted on component mount
 * @param Function fn
 */
function useOnMount(fn: Function) {
  useEffect(() => {
    fn && fn();
  }, []);
}

export default useOnMount;
