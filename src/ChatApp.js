import React, { useCallback, useEffect, useState } from "react";
import "./ChatApp.css";
import { RoomItem } from "./components/RoomItem";
import { useGiphy } from "./hooks/useGiphy";


export const ChatApp = () => {
  
  const {images} = useGiphy();

  useEffect(() => {
    // getImageFromApi();
    console.log(images)
  }, [images]);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 chat-rooms">
            {
              images && (images.map(image => <RoomItem image={image}/>)) 
            }

          </div>
          <div className="col-md-8 chat-body d-none d-sm-block">

          </div>
        </div>
      </div>
    </>
  );
};
