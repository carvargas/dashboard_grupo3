import React from 'react';
import '../ProductList.css';
import ProductListCard from './ProductListCard';

const ProductListBody = (props) => {

  const { products } = props;
  return (
    <ul className='productList'>
        {products.map((product,i) => (
          <ProductListCard prop={{product,i}}/>
        ))}
    </ul>
  )
}

export default ProductListBody