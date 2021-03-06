import React from 'react';


export const RoomItem = ({ user, index, handleRoomClicked }) => {

   return (
      <div className={ `room d-flex align-items-center my-2 animate__animated animate__fadeInLeft animate__delay-${index+1}s"` }
         onClick={()=>{handleRoomClicked(user?.id)}}
      >
         <div
            className="col-4 col-sm-3 col-md-3"
            style={{
               minHeight: "100px",
               height: "auto",
               backgroundImage:
                  `url(${user?.image})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
            }}></div>
         <div className="col-8 col-sm-9 col-md-9 d-flex align-items-center justify-content-between">
            <div className="flex-column justify-content-center align-items-center p-3 p-md-3">
               <p className="m-0">{user.name}</p>
               <small clas>{user.date}</small>
            </div>
            <div className="justify-content-center align-items-center mx-2">
               <span className="badge rounded-pill bg-danger ">
                  99
                  {/* <i className="bi bi-bar-chart" style={{ fontSize: 10 }}></i> */}
               </span>
            </div>
         </div>
      </div>
   )
}
