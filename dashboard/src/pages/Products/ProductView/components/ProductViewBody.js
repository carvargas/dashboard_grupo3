import React from 'react'
import ProductViewCard from './ProductViewCard';
import ProductViewImages from './ProductViewImages';
import ProductViewInfo from './ProductViewInfo';

const ProductViewBody = (props) => {
    const { product } = props;

    return (
      <div>
          <ProductViewCard product={product}/>
          <ProductViewInfo product={product}/>
          <ProductViewImages product={product}/>
          <div className='productViewSaveCancel'>
            <button>Cancelar</button>
            <button>Guardar</button>
          </div>
      </div>
    )
}

export default ProductViewBody