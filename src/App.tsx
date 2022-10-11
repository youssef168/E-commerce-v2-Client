import React, {
  useEffect,
  useContext,
  useRef,
  MutableRefObject,
  Fragment,
} from "react";
import "./App.css";
import AppRouter from "./Router";
import { ThemeProviderContext } from "./context/DarkTheme";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/main.css";
import useLocalStorage from "./hooks/useStorage";
import useOnMount from "./hooks/useOnMount";
import FetchProvider from "./context/FetchCtx";
import useRenderCount from "./hooks/useRenderCount";
import useFetch from "./hooks/useFetch";
import useInView from "./hooks/useInView";

import Home from "./pages/Home";
import ErrorBoundry from "./components/ui/ErrorBoundary";
import Fallback from "./components/ui/Fallback";

function App() {
  return (
    <ErrorBoundry fallback={<Fallback />}>
      <AppRouter />
    </ErrorBoundry>
  );
}

export default App;
