import React from 'react'
import { Link } from 'react-router-dom';

const ProductViewCard = (props) => {
  const { product } = props;

  return (
    <div className='productViewCardContainer'>
      <div className='imgContainer'>
        <img src={product.src} alt={product.alt}/>
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
              <img src={product.store} alt="cart"/>
              <p>Olivia</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductViewCard