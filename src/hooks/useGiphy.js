// useFetch Hook retrieve an array of URL from call to a end point on giphy.com 
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { GetImageFromState } from '../helpers/GetImageFromState';
import { useFetch } from "./useFetch";

export const useGiphy =  () => {

   const apiKey = "Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj";
   const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

   const [images, setImages] = useState([]);
   const {data, loading, error} = useFetch(url);

  useEffect(()=> {
    if(data?.data.length) {
      setImages(GetImageFromState(data?.data));
    }
    // setImages();
  }, [data]);

  return  {
    images,
    loading
  };
}
