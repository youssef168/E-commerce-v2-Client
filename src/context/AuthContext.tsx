// import React, {
//   createContext,
//   ReactNode,
//   useCallback,
//   useContext,
//   useState,
// } from "react";
// import { authService } from "../features/auth/services";
// import { LoginInterface, RegisterData } from "../features/auth/services/auth";
// import { useAsyncRequest } from "../hooks/useAsyncRequest";
// import useMountedState from "../hooks/useMountedState";
// import { getUser, getUserData } from "../utils/authUtils";

// interface AuthCtx {
//   isAuthenticated?: boolean;
//   loginAPI?: {
//     login?: (...args: any) => Promise<any>;
//     loginLoading?: boolean;
//     loginData?: any;
//     loginError?: any;
//   };
//   registerAPI?: {
//     register?: (...args: any) => void;
//     registerLoading?: boolean;
//     registerData?: any;
//     registerError?: any;
//   };
//   logout?: () => void;
//   user?: any;
//   setUserInStorage?: (data: any) => void;
// }

// const AuthContext = createContext<AuthCtx>({});

// export const useLoginAPIs = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     return;
//   }
//   return context.loginAPI;
// };

// export const useRegisterAPIs = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     return;
//   }
//   return context.registerAPI;
// };

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     return;
//   }

//   return context;
// };

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [currentUser, setCurrentUser] = useMountedState(
//     localStorage.getItem("current_user")
//       ? JSON.parse(localStorage.getItem("current_user") || "")
//       : undefined
//   );

//   const { loading, data, error, execute } = useAsyncRequest(
//     authService.register
//   );

//   const {
//     loading: loginLoading,
//     data: loginData,
//     error: errorLoading,
//     execute: loginExecute,
//   } = useAsyncRequest(authService.login);

//   // console.log(data?.data);
//   const register = useCallback(async (registerData: RegisterData) => {
//     await execute(registerData);
//   }, []);

//   const setUserInStorage = useCallback(async (data: any) => {
//     console.log(JSON.stringify(data?.data));
//     localStorage.setItem("current_user", JSON.stringify(data));
//     // setCurrentUser(data?.data);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated: getUser(),
//         loginAPI: {
//           login: loginExecute,
//           loginLoading: loginLoading,
//           loginData: loginData,
//           loginError: errorLoading,
//         },
//         registerAPI: {
//           register: register,
//           registerLoading: loading,
//           registerData: data,
//           registerError: error,
//         },
//         // logout: () => null,
//         user: currentUser,
//         setUserInStorage: setUserInStorage,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

export default {};
