import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChatApp.css';

export const ChatApp = () => {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-4 chat-rooms">
                  <div className="room d-flex">
                     <div className='col-3 d-flex justify-content-center align-items-center'>
                        <i className="fas fa-user"></i>
                     </div>
                     <div className='d-flex flex-column'>
                        <div>Jamal Fabian</div>
                        <div>15/55/2038</div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
