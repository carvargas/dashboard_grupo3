import React from 'react'
import ProductViewCard from './ProductViewCard';
import ProductViewInfo from './ProductViewInfo';

const ProductViewBody = (props) => {
    const { product } = props;

    return (
      <div>
          <ProductViewCard/>
          <ProductViewInfo/>
      </div>
    )
}

export default ProductViewBody