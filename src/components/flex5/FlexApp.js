import React from 'react';
import './FlexApp.css';

export const FlexApp = () => {
   return (
      <div className="container">
         <div className="row my-5 mb-5">
            <h4>Auto Margin</h4>
            <div className="col">
               <div className="contenedor d-flex justify-content-end">
                  <div className='me-auto'>.me-auto (margin end auto)</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               <div className="contenedor d-flex justify-content-start">
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div className='ms-auto'>.me-auto (margin start auto)</div>
               </div>
               <div className="contenedor d-flex flex-column align-items-start" style={{height:250}}>
                  <div className='mb-auto'>.mb-auto</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
               </div>
               <div className="contenedor d-flex flex-column align-items-end" style={{height:250}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div className='mt-auto'>.mt-auto</div>
               </div>
            </div>
         </div>
      </div>
   )
}
