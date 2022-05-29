import rightArrow from '../../../../assets/img/rightArrow.svg';
import React from 'react';
//hook useNavigate
import { useNavigate } from "react-router-dom";

const ProductListCard = (props) => {

  const navigate = useNavigate();

  const handleClickProduct = (id) => {
    navigate(`/products/${id}`);
  }

  const { product } = props.prop;

  return (
    <li className="product" onClick={()=>{ handleClickProduct(product._id) }}>
      <figure>
        <img src={product.src} alt={product.alt}></img>
      </figure>
      <div className='productDesc'>
          <h3>{product.nombre}</h3>
          <p>#{product._id}</p>
      </div>
      <button><img src={rightArrow} alt='right arrow'></img></button>
    </li>
  )
}

export default ProductListCard