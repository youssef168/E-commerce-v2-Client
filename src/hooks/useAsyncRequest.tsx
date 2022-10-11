import React, { DependencyList, useCallback, useState } from "react";
import useMountedState from "./useMountedState";

type FunctionReturnPromise<T> = (...args: any[T]) => Promise<T>;

/**
 * function requires a promise function which it should make a request then will make this request
 * inside of this function and keep track of data, errors, and loading
 * * this function uses `useMountedState` hook so it only dispatch state when component being mounted
 * @param fn async request function
 * @param deps if presents, will re-fire the function if one of the depaendacnies change
 */
export function useAsyncRequest<T, E = string>(
  fn: FunctionReturnPromise<T>,
  deps: DependencyList = [],
  initialLoading?: boolean
) {
  const [loading, setLoading] = useMountedState(
    initialLoading ? initialLoading : false
  );
  const [data, setData] = useMountedState<T | undefined>(undefined);
  const [error, setError] = useMountedState<E | undefined>(undefined);

  /**
   * execute function which a function use to execute an async operation
   * * not called on every render, just when one of the deps or the fn changing
   */
  const execute = useCallback(
    async (...args: Parameters<FunctionReturnPromise<T>>) => {
      setLoading(true);
      return await fn(...args)
        .then((data) => setData(data))
        .catch(setError)
        .finally(() => setLoading(false));
    },
    [deps, fn]
  );

  return { loading, data, error, execute };
}
