import React from 'react';
import ProductListBody from './components/ProductListBody';
import './ProductList.css';
//hook fetch
import useProductListFetch from '../../../hooks/useProductListFetch';


const ProductList = () => {

  const [products, isLoading] = useProductListFetch();

  return (
    <div className='productListContainer'>
        { !isLoading ? 
          <ProductListBody products={products}/> 
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
          products.length === 0 && !isLoading &&
          <div className="cargandoProductos"> No hay productos disponibles </div>
        }
        
    </div>
  )
}

export default ProductList