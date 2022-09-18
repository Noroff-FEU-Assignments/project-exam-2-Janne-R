import { useState, useEffect } from 'react';

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

  useEffect(() => {
    async function doFetch() {
      try {
        setIsLoading(true);
        setIsError(false);

        const fetchedData = await fetch(url, options);
        const json = await fetchedData.json();
        console.log(json);

        setData(json.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
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