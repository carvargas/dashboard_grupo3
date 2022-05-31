import React, { useState } from 'react';
import '../ProductView/ProductView.css';
//hook fetch
import ProductViewBody from '../ProductView/components/ProductViewBody';

const NewProduct = () => {

  const [newproduct] = useState({
    _id: 0,
    category:"",
    nombre:"",
    description:"",
    src:"",
    alt:"",
    puntos:"",
    gallery: [],
    mostwanted:false,
    suggested:false,
    stock:0,
    store:"",
    __v:0
  })

  let product = newproduct;
  

  return (
    <div className='productViewContainer'>

      { product ?
        <ProductViewBody product={product}/> 
        : 
        <div className="cargandoProductos">
          <div className="spinner"> 
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      }
      
      {
        !product &&
        <div className="cargandoProductos"> No se encontro el producto </div>
      }

    </div>
  )
}

export default NewProduct