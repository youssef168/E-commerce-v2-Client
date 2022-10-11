import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import queryString from "query-string";

function useRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  return useMemo(() => {
    return {
      pathname: location.pathname,
      navigate: navigate,
      goBack: navigate(-1),
      goForward: navigate(1),
      params: params,
      replace: (path: string) => navigate(path, { replace: true }),

      query: {
        ...queryString.parse(location.search),
      },
    };
  }, []);
}

export default useRouter;
