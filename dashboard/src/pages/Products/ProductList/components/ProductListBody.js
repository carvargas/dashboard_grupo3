import React, { useContext, useEffect, useState } from 'react';
import ProductListCard from './ProductListCard';
//context
import { appContext } from '../../../../contexts/AppContext';

const ProductListBody = (props) => {  

  let { products } = props;
  const{search}= useContext(appContext);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    
    if(search !== ''){
      let filteredProducts = products.filter(product => {
        return product.nombre.toLowerCase().includes(search);
      });
      setFiltered(filteredProducts);
    }else{
      setFiltered(products);
    }
  }, [search, products])

  // console.log(filtered);
  return (
    <ul className='productList'>
      {
        search !== '' ?
        filtered.map((product,i) => (  
          <ProductListCard prop={{product} } key={i}/>
        ))
        :
        products.map((product,i) => (  
          <ProductListCard prop={{product} } key={i}/>
        ))
      }
    </ul>
  )
}

export default ProductListBody