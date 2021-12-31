import React, { useCallback, useEffect, useState } from "react";
import "./ChatApp.css";
import axios from "axios";

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
          <div className="col-4 chat-rooms">
            {
              images && (images.map(image => (
                <div className="room d-flex align-items-center my-2">
                  <div
                    className="col-3"
                    style={{
                      minHeight: "50px",
                      height: "auto",
                      backgroundImage:
                        `url(${image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}></div>
                  <div className="col-9 d-flex align-items-center justify-content-between">
                    <div className="flex-column justify-content-center align-items-center p-1">
                      <p className="m-0">Jamal Fabian</p>
                      <small>15/55/2038</small>
                    </div>
                    <div className="justify-content-center align-items-center mx-2">
                      <span className="badge rounded-pill bg-primary ">
                        99
                        <i className="bi bi-bar-chart" style={{ fontSize: 10 }}></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))
              )
            }

          </div>
        </div>
      </div>
    </>
  );
};
