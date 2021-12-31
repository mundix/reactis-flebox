import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import './ChatApp.css';
import axios from 'axios';


const apiKey = 'Nr4bfrgRK7obHM3O68YwvQ2iUmuxi8Yj';
const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`;


export const ChatApp = () => {

   const [images, setImages] = useState([]);

   useEffect(() => {
      getImageFromApi();
   }, []);

   const getImageFromApi = async () => {
      console.log('paso 1')
       await axios.get(url)
         .then( (resp) => {
            setImages(handleGetImageFromState(resp.data.data));
         });
         //Aqui no esta imprimiendo lo que guarda con el setImage
         //Pero en el React Component del inspector estan asignado los states de images
         console.log(images); 
   }

   const handleGetImageFromState = (images) => {
      return images.map( image => {
         return image.images.original.url;
      });
   }

   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-4 chat-rooms">
                  <div className="room d-flex">
                     <div className='col-3 d-flex justify-content-center align-items-center'>

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
