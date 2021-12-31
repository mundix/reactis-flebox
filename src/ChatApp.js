import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './ChatApp.css';

export const ChatApp = () => {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-4 chat-rooms">
                  <div className="room d-flex">
                     <div className='col-3 d-flex justify-content-center align-items-center'>
                        <i className="bi bi-alarm-fill text-warning" style={{ fontSize: 50 }}></i>
                     </div>
                     <div className='d-flex flex-column justify-content-center align-items-center'>
                        <p className='m-0'>Jamal Fabian</p>
                        <small>15/55/2038</small>
                     </div>
                     <div className='col-3 d-flex justify-content-center align-items-center'>
                           <span className="badge rounded-pill bg-primary ">
                              99
                           </span>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
