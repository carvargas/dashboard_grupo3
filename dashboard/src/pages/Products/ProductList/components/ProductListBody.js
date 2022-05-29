import React from 'react';
import ProductListCard from './ProductListCard';

const ProductListBody = (props) => {  

  let { products } = props;
  
  
  return (
    <ul className='productList'>
      {products.map((product,i) => (  
        <ProductListCard prop={{product} } key={i}/>
      ))}
    </ul>
  )
}

export default ProductListBody