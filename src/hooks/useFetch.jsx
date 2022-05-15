import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: url,
    })
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        if (error) throw error;
      });
  }, [url]);
  return data;
};

export { useFetch };
