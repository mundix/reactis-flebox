import React from 'react';
import './FlexApp.css';

export const FlexApp = () => {
   return (
      <div className="container">
         <div className="row my-5">
            <div className="col">
               <h4>Align Items</h4>
               <hr />
               {/* 
               Variantes
               .align-items- | start | end | center | baseline | strech 
               sm | md | lg | xl | xxl
               .align-items-*- | start | end | center | baseline | strech
              */}
               <p>.align-items-start</p>
               <div className="contenedor d-flex align-items-start">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               <p>.align-items-center</p>
               <div className="contenedor d-flex align-items-center">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               <p>.align-items-end</p>
               <div className="contenedor d-flex align-items-end">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               <p>.align-items-baseline (Alinea en base al texto y no a la caja)</p>
               <div className="contenedor d-flex align-items-baseline">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               <p>.align-items-strech (100% del espacio disponible)</p>
               <div className="contenedor d-flex align-items-strech">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>

            </div>
         </div>
         <div className="row my-5">
            <div className="col">
               <h4>Align Self</h4>
               <div className="contenedor d-flex">
                  <div className="align-self-start">.align-self-start</div>
                  <div className="align-self-center">.align-self-center</div>
                  <div className="align-self-end">.align-self-end</div>
                  <div className="align-self-baseline">.align-self-baseline</div>
                  <div className="align-self-strech">.align-self-strech</div>
               </div>
            </div>
         </div>
         <div className="row my-5 mb-5">
            <h4>Auto Margin</h4>
            <div className="col">
               <div className="contenedor d-flex justify-content-end">
                  <div className='me-auto'>.me-auto (margin end auto)</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               
            </div>
         </div>
      </div>
   )
}
