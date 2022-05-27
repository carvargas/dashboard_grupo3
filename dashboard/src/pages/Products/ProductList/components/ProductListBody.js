import React, { useState, useEffect } from 'react';
import '../ProductList.css';
import rightArrow from '../../../../assets/img/rightArrow.svg';

const ProductListBody = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      
      fetch('http://localhost:3030/api/allproducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))

    }, []);
    
  return (
    <ul className='productList'>
        {products.map((product,i) => (
          
          <li key={i} className="product">

            <img src={product.src} alt={product.alt}></img>
            <div className='productDesc'>
                <h3>{product.nombre}</h3>
                <p>#{product._id}</p>
            </div>
            <button><img src={rightArrow} alt='right arrow'></img></button>

          </li>
        ))}
    </ul>
  )
}

export default ProductListBody