import { useEffect, useRef } from "react";

/**
 * controls the behavior of `useRenderCount` hook
 */
interface RenderCountOptions {
  countUnMounts?: boolean;
}

/**
 * a hook will return a number of renders that component has made
 */
function useRenderCount(options: RenderCountOptions) {
  //* I'll use useRef because it'll save the value even on re-render!
  const renderRef = useRef<number>(1); // on initial render make it one
  const unmountsRef = useRef<number>(0);

  const { countUnMounts } = options;

  useEffect(() => {
    // on each
    renderRef.current += 1;

    return () => {
      if (countUnMounts) {
        unmountsRef.current += 1;
      }
      return;
    };
  });

  return [
    { "Many-Renders": renderRef.current },
    { "Many-Unmounts": unmountsRef.current },
  ];
}

export default useRenderCount;
