import React, { useCallback, useEffect, useState } from "react";
import 'animate.css';
import "./ChatApp.css";
import { RoomItem } from "./components/RoomItem";
import { useGiphy } from "./hooks/useGiphy";
import { useFaker } from './hooks/useFaker';


export const ChatApp = () => {
  
  const {images, loading} = useGiphy();
  const { collection } = useFaker(images);

  const handleRoomClicked = (uuid) => {
    console.log( uuid);
  }

  // useEffect(() => {
  //   console.log("Lllego la coleccion:",collection);
  // }, [collection])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 chat-rooms">
            {
              loading && <h2 className="alert alert-primary">Loading ...</h2>
            }
            {
              !loading && collection.length && 
                (collection.map((user, index) => 
                    <RoomItem key={index} user={user} index={index} handleRoomClicked={handleRoomClicked}/>
                  )) 
            }

          </div>
          <div className="col-md-7 chat-body d-none d-sm-block">

          </div>
        </div>
      </div>
    </>
  );
};
