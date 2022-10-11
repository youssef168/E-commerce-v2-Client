import React, { useEffect, useReducer, useRef } from "react";

import useMountedState from "./useMountedState";
import useIsMounted from "./useIsMounted";

export type RequestStatus = "Loading" | "Fetched" | "Error";

interface FetchOptions {
  /**
   * will clean the cache on everytime component unmounts
   */
  cleanOnUmount?: boolean;
  /**
   * will return this error message instead of the server
   * message error
   */
  errorMsg?: string;
  /**
   * will return the cache in case refetched happened
   */
  returnsCache?: boolean;
  /**
   * request options
   */
  requestOptions?: RequestInit;
  /**
   * will return a function that will execute the API call
   */
  //   useExecute?: boolean;
}

interface DataStyle<T = any> {
  data?: T | Array<T>;
  error?: Error | string;
  status?: RequestStatus;
}

interface FetchParams {
  url: string;
  options?: FetchOptions;
}

interface CacheState<T extends unknown> {
  /**
   * * the key should be url or something unique because
   * * this will store the data
   */
  [key: string]: any;
}
const initialState: DataStyle = {
  data: undefined,
  error: undefined,
  status: undefined,
};

type ActionDispatchor<T> =
  | { type: "Loading" }
  | { type: "Fetched"; payload: T }
  | { type: "Error"; payload: Error | any };

function useFetch<T = any>(params: FetchParams) {
  const { url, options } = params;
  const [response, setResponse] = useMountedState<DataStyle>();
  const cacheRef = useRef<CacheState<T>>({});

  const stateReducer = (
    state: DataStyle<T>,
    action: ActionDispatchor<T>
  ): DataStyle<T> => {
    switch (action.type) {
      case "Loading":
        return {
          ...initialState,
          data: undefined,
          error: undefined,
          status: "Loading",
        };

      case "Fetched":
        return {
          ...initialState,
          data: action.payload,
          error: undefined,
          status: "Fetched",
        };
      case "Error":
        return {
          ...initialState,
          data: undefined,
          error: action.payload,
          status: "Error",
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(stateReducer, initialState);

  useEffect(() => {
    // make sure that every thing we'll do only if component is mounted
    if (!url)
      throw new Error(
        "useFetch requires a url to be fetched, make sure you've set it"
      );
    const fetchData = async () => {
      dispatch({
        type: "Loading",
      });
      if (cacheRef.current[url]) {
        dispatch({
          type: "Fetched",
          payload: cacheRef.current[url],
        });
      }

      try {
        const res = await fetch(url, options?.requestOptions);

        if (res.ok) {
          const jsonData = (await res.json()) as T;
          cacheRef.current[url] = jsonData;
          dispatch({
            type: "Fetched",
            payload: jsonData,
          });
        } else {
          if (options?.errorMsg) {
            dispatch({
              type: "Error",
              payload: options.errorMsg,
            });
          } else {
            dispatch({
              type: "Error",
              payload: res.statusText,
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url]);

  return { state } as const;
}

export default useFetch;
