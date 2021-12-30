import React from 'react';
import './FlexApp.css';

export const FlexApp = () => {
   return (
      <div className="container">
         <div className="row my-5">
            <div className="col">
               <h4>Fill</h4>
               <hr />
               {/* 
                  .flex-fill
                  sm | md | ls | xl | xxl
                  .flex-*-fill
               */}
               <div className="contenedor d-flex align-items-start">
                  <div>Nostrud quis fugiat ullamco laboris aliqua officia.</div>
                  <div className="flex-fill">.flex-fill</div>
                  <div className="flex-fill">.flex-fill</div>
               </div>
            </div>
         </div>
      </div>
   )
}
