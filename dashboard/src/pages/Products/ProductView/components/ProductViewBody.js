import React from 'react'
import { Link } from 'react-router-dom';
import ProductViewCard from './ProductViewCard';
import ProductViewImages from './ProductViewImages';
import ProductViewInfo from './ProductViewInfo';

const ProductViewBody = (props) => {
    const { product } = props;

    return (
      <div className='productViewBodyContainer'>
          <ProductViewCard product={product}/>
          <ProductViewInfo product={product}/>
          <ProductViewImages product={product}/>
          <div className='productViewSaveCancel'>
            <button><Link to={"/products"} style={{ textDecoration: 'none', color: 'white' }}>Cancelar</Link></button>
            <button>Guardar</button>
          </div>
      </div>
    )
}

export default ProductViewBody