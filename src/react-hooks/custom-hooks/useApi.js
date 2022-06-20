import React, { useState, useEffect, useRef } from "react";

const useApi = (url) => {
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState(null);
  const [data, setData] = useState({
    loading: false,
    data: null,
  });
  const handleFetchApi = async () => {
    try {
        setData({
            ...data,
            loading: true
        })
      const response = await fetch(url);
      const res = await response.json();
      setData({
        loading: false,
        data: res,
      });
    } catch (error) {
      console.log(error);
    } finally {
        
    }
  };

  useEffect(() => {
    handleFetchApi();
  }, [url]);

  return { ...data };
};

export default useApi;
