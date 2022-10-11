import React from "react";

interface FetchProviderProps {
  children?: React.ReactNode;
  data: any;
  placeholder: React.ComponentType;
}

interface FetchProviderCtx {
  data?: any;
  children?: React.ReactNode;
}

const FetchContext = React.createContext<FetchProviderCtx>({});

/**
 * create hook to give children access to the data
 */

export function useFetchCtx() {
  const ctx = React.useContext(FetchContext);
  if (!ctx) {
    return;
  }

  return ctx;
}

const FetchProvider: React.FC<FetchProviderProps> = ({ children, data }) => {
  return (
    <FetchContext.Provider
      value={{
        data: data,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};

export default FetchProvider;
