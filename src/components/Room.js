import React from 'react'

export const Room = ({room}) => {
   return (
      <div className="col-12 p-1 pb-3  chat-body  d-flex flex-column justify-content-between ">
              <div>
                <h2>{room?.name}</h2>
              </div>
              <div className=" form-group col-12">
                <form action="">
                  <textarea className="form-control " name="" id="" rows="5"></textarea>
                  <button className="btn btn-primary  align-self-end">Send</button>
                </form>
              </div>
            </div>
   )
}
