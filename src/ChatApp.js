import React, { useCallback, useEffect, useState } from "react";
import "./ChatApp.css";
import axios from "axios";
import { RoomItem } from "./components/RoomItem";

const apiKey = "Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj";
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;

export const ChatApp = () => {
  const [images, setImages] = useState([]);

  const getImageFromApi = useCallback(async () => {
    console.log("paso 1");
    await axios.get(url).then((resp) => {
      setImages(handleGetImageFromState(resp.data.data));
      // Aqui tampoco esta imprimiendo.
    });
    //Aqui no esta imprimiendo lo que guarda con el setImage
    //Pero en el React Component del inspector estan asignado los states de images
    console.log("Paso 2");
  }, []);

  useEffect(() => {
    getImageFromApi();
  }, []);

  const handleGetImageFromState = (arrImages) => {
    return arrImages.map((image) => {
      return image.images.original.url;
    });
  };

  console.log(images);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 chat-rooms">
            {
              images && (images.map(image => (
                <RoomItem image={image}/>
              ))
              )
            }

          </div>
        </div>
      </div>
    </>
  );
};
