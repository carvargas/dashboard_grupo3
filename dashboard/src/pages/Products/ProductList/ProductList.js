import React from 'react'
import ProductListBody from './components/ProductListBody'
import ProductListHeader from './components/ProductListHeader'

const ProductList = () => {
  return (
    <div className='productListContainer'>
        <ProductListHeader/>
        <ProductListBody/>
    </div>
  )
}

export default ProductList