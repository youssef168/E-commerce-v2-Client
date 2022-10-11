import React, { useCallback } from "react";

/**
 * hook will force the component to re-render
 * * NOTE!: in most of cases you won't this hook at all, because it maybe lead to undesired actions, React automatically manage this
 * @stable
 */

function useForceUpdate() {
  const [, _] = React.useState(0);

  /**
   * use this function to force the component to update
   */
  const forceUpdate = useCallback(() => {
    _((prev) => prev + 1);
  }, []);

  return forceUpdate;
}

export default useForceUpdate;
