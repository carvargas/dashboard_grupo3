import React from 'react'
import { Link } from 'react-router-dom';

import placeholder from '../../../../assets/img/productogenerico.svg'
import profile from '../../../../assets/img/profile_pic.svg'
const ProductViewCard = (props) => {
  const { product } = props;
  

  return (
    <div className='productViewCardContainer'>
      <div className='imgContainer'>
        {product.src !== '' ? <img src={product.src} alt={product.alt}/> : <img src={placeholder} alt='' />}
        
      </div>
      <div className='infoContainer'>
        <p>{product.nombre}</p>
        <div>
          <div className='infoContainerItem'>
            {product.puntos}
            <div className='p'><p>PUNTOS</p><p>SUPERCLUB</p></div>
          </div>
          <div className='infoContainerItem'>
            {product.stock}
            <div className='p'><p>STOCK</p><p>DISPONIBLE</p></div>
          </div>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
            <div className='infoContainerStore'>
            {product.store !=='' ? <img src={product.store} alt="cart"/> : <img src={profile} alt="cart"/>}
              <p>Olivia</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductViewCard