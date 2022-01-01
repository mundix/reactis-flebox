import React, { useCallback, useEffect, useState } from "react";
import 'animate.css';
import "./ChatApp.css";
import { RoomItem } from "./components/RoomItem";
import { useGiphy } from "./hooks/useGiphy";
import { useFaker } from './hooks/useFaker';
import { Room } from "./components/Room";


export const ChatApp = () => {

  const { images, loading } = useGiphy();
  const { collection } = useFaker(images);
  const [room, setRoom] = useState({
    id: null,
    name: null,
    image: null,
    date: null,
  });

  const handleRoomClicked = (uuid) => {
    const room = collection.find(user => user.id === uuid);
    setRoom(room);
  }

  // useEffect(() => {
  //   collection.lenght && console.log("Lllego la coleccion:",collection);
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
                <RoomItem key={index} user={user} index={index} handleRoomClicked={handleRoomClicked} />
              ))
            }

          </div>
          <div className="col-md-7 chat-body  d-none d-sm-block m-0 p-0 ">
            {
              room?.id && <Room room={room}/>
            }
          </div>
        </div>
      </div>
    </>
  );
};
