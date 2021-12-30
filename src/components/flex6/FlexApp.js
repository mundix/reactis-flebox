import React from 'react';
import './FlexApp.css';

export const FlexApp = () => {
   return (
      <div className="container">
         <div className="row my-5 mb-5">
            <div className="col">
               <h4>Flex Wrap</h4>
               <hr />

               {/* 
                  Variantes

                  .flex-nowrap
                  .flex-wrap
                  .flex-wrap-reverse

                  sm | md | lg | xl | xxl 
                  .flex-*-nowrap
                  .flex-*-wrap
                  .flex-*-wrap-reverse 
               */}

               <p>.flex-nowrap</p>
               <div className="contenedor d-flex flex-nowrap">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.flex-wrap</p>
               <div className="contenedor d-flex flex-wrap">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.flex-wrap-reverse</p>
               <div className="contenedor d-flex flex-wrap-reverse">
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
            </div>
         </div>
         <div className="row my-5 mb-5">
            <div className="col">
               <h4>Order</h4>
               <hr />
               {/* 
                  Variantes del Order:
                  .order-1      .order-5

                  sm | md | lg | xl | xxl 
                  .order-*-1 .order-*-5

               */}
               <div className="contenedor d-flex flex-nowrap">
                  <div className='order-3'>Caja 1</div>
                  <div className='order-2'>Caja 2</div>
                  <div className='order-1'>Caja 3</div>
               </div>
            </div>
         </div>
         <div className="row my-5 mb-5">
            <div className="col">
               <h4>Align Conrtent</h4>
               <hr />
               <p>.align-content-start</p>
               <div className="contenedor d-flex flex-wrap align-content-start" style={{height:200}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.align-content-center</p>
               <div className="contenedor d-flex flex-wrap align-content-center" style={{height:200}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.align-content-end</p>
               <div className="contenedor d-flex flex-wrap align-content-end" style={{height:200}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.align-content-between</p>
               <div className="contenedor d-flex flex-wrap align-content-between" style={{height:200}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.align-content-around</p>
               <div className="contenedor d-flex flex-wrap align-content-around" style={{height:200}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
               <p>.align-content-strech</p>
               <div className="contenedor d-flex flex-wrap align-content-strech" style={{height:400}}>
                  <div>Caja 1</div>
                  <div>Caja 2</div>
                  <div>Caja 3</div>
                  <div>Caja 4</div>
                  <div>Caja 5</div>
                  <div>Caja 6</div>
                  <div>Caja 7</div>
                  <div>Caja 8</div>
                  <div>Caja 9</div>
                  <div>Caja 10</div>
                  <div>Caja 11</div>
                  <div>Caja 12</div>
                  <div>Caja 13</div>
                  <div>Caja 14</div>
                  <div>Caja 15</div>
               </div>
            </div>
            </div>
      </div>
   )
}
