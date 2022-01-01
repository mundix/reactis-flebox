// useFetch Hook retrieve an array of URL from call to a end point on giphy.com 
import axios from "axios";
import React, {  useEffect, useState } from "react";
import { GetImageFromState } from '../helpers/GetImageFromState';

export const useGiphy =  () => {

   const apiKey = "Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj";
   const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

   const [images, setImages] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(()=> {
    axios.get(url).then(resp => {
      setImages(GetImageFromState(resp?.data.data));
      setLoading(false);
    })
  }, [url]);

  return  {
    images,
    loading,
  };
}
