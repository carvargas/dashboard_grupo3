import React, { useState, useEffect } from 'react'
import ProductListBody from './components/ProductListBody'
import ProductListHeader from './components/ProductListHeader'

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    fetch('http://localhost:3030/api/allproducts')
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setIsLoading(false);
    })
    .catch(err => setIsLoading(false))
  }, []);
    
  return (
    <div className='productListContainer'>
        <ProductListHeader/>
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