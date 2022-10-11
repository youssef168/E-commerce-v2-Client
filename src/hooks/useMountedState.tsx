import React, { Dispatch, SetStateAction, useCallback } from "react";
import useIsMounted from "./useIsMounted";
import useForceUpdate from "./useForceUpdate";

/**
 * exactly the same as useState hook but only invoke if the component is mounted, Otherwise
 * it won't invoke
 * @param initialState any
 */
/**
 * exactly the same as useState hook but only invoke if the component is mounted, Otherwise
 * it won't invoke
 * * mainly used to create stable state actions and provide stable APIs
 * @param initialState any
 */
function useMountedState<T = any>(
  initialState?: T | (() => T)
): [T | undefined, Dispatch<SetStateAction<T>>] {
  const isMounted = useIsMounted();
  const [state, setState] = React.useState(initialState);

  const setMountState = useCallback((value) => {
    //* check if the component is mounted
    if (isMounted) setState(value as T);
  }, []) as Dispatch<SetStateAction<T>>;

  return [state, setMountState];
}

export default useMountedState;
