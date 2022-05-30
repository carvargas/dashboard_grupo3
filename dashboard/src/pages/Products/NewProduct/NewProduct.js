import React, { useState } from 'react';
import '../ProductView/ProductView.css';
//hook fetch
import useProductListFetch from '../../../hooks/useProductListFetch';
import ProductViewBody from '../ProductView/components/ProductViewBody';

const NewProduct = () => {
  const [products, isLoading] = useProductListFetch();
  
  const [state, setState] = useState({
    _id:0,
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

  let product = state;

  return (
    <div className='productViewContainer'>

      { !isLoading && product ?
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
        !product && !isLoading &&
        <div className="cargandoProductos"> No se encontro el producto </div>
      }

    </div>
  )
}

export default NewProduct