import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function useApi(url, defaultValue, headers) {
  const options = {
    headers: {
      "Content-type": "application/json",
      ...headers
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(defaultValue);
  const [, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function doFetch() {
      try {
        setIsLoading(true);
        setIsError(false);

        const fetchedData = await fetch(url, options);
        const json = await fetchedData.json();
        if (!fetchedData.ok && fetchedData.status === 401) {
          setAuth(null);
          navigate("/login");
        }
        setData(json.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    doFetch(url);
  }, [url]);

  return {
    isLoading,
    isError,
    data,
  };
}

export default useApi;