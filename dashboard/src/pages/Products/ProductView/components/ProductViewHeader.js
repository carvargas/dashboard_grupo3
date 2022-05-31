import React from 'react';
import { Link } from 'react-router-dom';
//hook fetch
import useProductListFetch from '../../../../hooks/useProductListFetch';

const ProductViewHeader = () => {

  const [products, isLoading] = useProductListFetch();

  let product = null;
  if(!isLoading){
    product = products.find(product => product._id === window.location.pathname.split('/')[2]);
  }
  if(window.location.pathname.split('/')[2] === 'new'){
    return(
      <nav className='productViewHeaderContainer'>
        <ul>
          <li><Link to={"/products"} style={{ textDecoration: 'none', color: 'white' }}><p className='title'>Productos</p></Link></li>
          <li><i className="fa-solid fa-angle-right"></i></li>
          <li><p className='title'>#{products.length + 1}</p></li>
        </ul>
      </nav>
    )
  }

  return (
    <>
      { !isLoading && product ?
        <nav className='productViewHeaderContainer'>
          <ul>
            <li><Link to={"/products"} style={{ textDecoration: 'none', color: 'white' }}><p className='title'>Productos</p></Link></li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li><p className='title'>#{product._id}</p></li>
          </ul>
        </nav>
        : 
        <div className="cargandoProductos">
          <div className="spinner"> 
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      }

      {
        !product && !isLoading &&
        <div className="cargandoProductos"> No se encontro el producto </div>
      }
    </>
  )
}

export default ProductViewHeader