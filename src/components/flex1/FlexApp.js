import React from 'react';
import './FlexApp.css';

const url = 'https://youtu.be/J8FjPatoilw?t=1289';``

export const FlexApp = () => {
        return (
                <>
                   <div className="container">
                           {/* 
                                Podemos establecer que tipo de elemento flexbo sera, de tipo block o inline, 
                                y podemos establecer tambien desde que dispositivo lo sera.

                                Variates
                                .d-flex
                                .d-flex-inline

                                .d-sm-flex
                                .d-md-inline-flex
                                .d-md-flex
                                .d-md-inline-flex
                                .d-lg-flex
                                .d-lg-inline-flex
                                .d-xl-flex
                                .d-xl-inline-flex

                           */}
                        <div className="row my-5">
                                <div className="col">
                                        <h4>tipos de display flex</h4>
                                        <hr />
                                        <div className="bg-primary text-white p-3 d-flex">
                                                <p className='mb-0'>Dispaly Flex <strong>.d-flex</strong></p>
                                        </div>
                                        <br />
                                        <div className="bg-primary text-white p-3 d-inline-flex">
                                                <p className="mb-0">Disaply Inline Flex <strong>.d-inline-flex</strong></p>
                                        </div>
                                </div>
                        </div>

                        <div className="row my-5">
                                <h4>Direciton</h4>
                                <hr />

 {/* 
                                Variates
                                .flex-row
                                .flex-row-reverse

                                .flex-column
                                .flex-column-reverse

                                sm | md | lg | xl | xxl
                                .flex-*-row
                                .flex-*-row-reverse
                                .flex-*-column
                                .flex-*-column-reverse

                           */}

                                <p>.flex-row</p>
                                <div className='contenedor d-flex flex-row'>
                                        <div>Caja 1</div>
                                        <div>Caja 2</div>
                                        <div>Caja 3</div>
                                </div>
                                
                                <p>.flex-row-reverse</p>
                                <div className='contenedor d-flex flex-row-reverse'>
                                        <div>Caja 1</div>
                                        <div>Caja 2</div>
                                        <div>Caja 3</div>
                                </div>

                                <p>.flex-column</p>
                                <div className='contenedor d-flex flex-column'>
                                        <div>Caja 1</div>
                                        <div>Caja 2</div>
                                        <div>Caja 3</div>
                                </div>
                                <p>.flex-column-reverse</p>
                                <div className='contenedor d-flex flex-column-reverse'>
                                        <div>Caja 1</div>
                                        <div>Caja 2</div>
                                        <div>Caja 3</div>
                                </div>
                        </div>

                        <div className="row my-5">
                                <div className="col">
                                        <h4>Justify Content</h4>
                                        <hr />
                                        <p>.justify-content-start</p>
                                        <div className="contenedor d-flex justify-content-start">
                                                <div>Caja 1</div>
                                                <div>Caja 2</div>
                                                <div>Caja 3</div>
                                        </div>
                                        <p>.justify-content-center</p>
                                        <div className="contenedor d-flex justify-content-center">
                                                <div>Caja 1</div>
                                                <div>Caja 2</div>
                                                <div>Caja 3</div>
                                        </div>
                                        <p>.justify-content-end</p>
                                        <div className="contenedor d-flex justify-content-end">
                                                <div>Caja 1</div>
                                                <div>Caja 2</div>
                                                <div>Caja 3</div>
                                        </div>
                                        <p>.justify-content-between</p>
                                        <div className="contenedor d-flex justify-content-between">
                                                <div>Caja 1</div>
                                                <div>Caja 2</div>
                                                <div>Caja 3</div>
                                                <div>Caja 4</div>
                                        </div>
                                        <p>.justify-content-around</p>
                                        <div className="contenedor d-flex justify-content-around">
                                                <div>Caja 1</div>
                                                <div>Caja 2</div>
                                                <div>Caja 3</div>
                                                <div>Caja 4</div>
                                                <div>Caja 5</div>
                                        </div>
                                </div>
                        </div>

                   </div>
                </>
        )
}
