import React from 'react';
import './ProductView.css';
//hook fetch
import useProductListFetch from '../../../hooks/useProductListFetch';
import ProductViewBody from './components/ProductViewBody';

const ProductView = () => {

  const [products, isLoading] = useProductListFetch();
  
  let product = null;
  if(!isLoading){
    product = products.find(product => product._id === window.location.pathname.split('/')[2]);
  }

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

export default ProductView