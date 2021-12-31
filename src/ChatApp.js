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
      console.log('paso 1');
      await axios.get(url)
         .then((resp) => {
            setImages(handleGetImageFromState(resp.data.data));
            // Aqui tampoco esta imprimiendo. 
            console.log(images);
         });
      //Aqui no esta imprimiendo lo que guarda con el setImage
      //Pero en el React Component del inspector estan asignado los states de images
      console.log('Paso 2');
      console.log(images);
   }

   const handleGetImageFromState = (arrImages) => {
      return arrImages.map(image => {
         return image.images.original.url;
      });
   }

   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-4 chat-rooms">
                        <div className="room d-flex my-2 ">
                           <div className='col-3 d-flex justify-content-center align-items-center' 
                              style={{
                                 height:'auto', 
                                 backgroundImage: 'url(https://as01.epimg.net/meristation/imagenes/2021/09/25/reportajes/1632573368_219433_1632642376_noticia_normal_recorte1.jpg)',
                                 backgroundRepeat: 'no-repeat',
                                 backgroundSize: 'cover'
                              }}
                              >

                           </div>
                           <div className='d-flex flex-column justify-content-center align-items-center p-1'>
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
