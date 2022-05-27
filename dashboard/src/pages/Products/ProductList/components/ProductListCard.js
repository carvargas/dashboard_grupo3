import rightArrow from '../../../../assets/img/rightArrow.svg';
import React from 'react'

const ProductListCard = (props) => {

  const { product, i } = props.prop;
  
  return (
    <li key={i} className="product">
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