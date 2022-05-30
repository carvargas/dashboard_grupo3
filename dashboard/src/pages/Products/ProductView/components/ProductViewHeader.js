import React from 'react';
//hook fetch
import useProductListFetch from '../../../../hooks/useProductListFetch';

const ProductViewHeader = () => {

  const [products, isLoading] = useProductListFetch();

  let product = null;
  if(!isLoading){
    product = products.find(product => product._id === window.location.pathname.split('/')[2]);
  }

  return (
    <div>ProductViewHeader</div>
  )
}

export default ProductViewHeader