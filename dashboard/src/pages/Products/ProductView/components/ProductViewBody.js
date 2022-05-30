import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ProductViewCard from './ProductViewCard';
import ProductViewImages from './ProductViewImages';
import ProductViewInfo from './ProductViewInfo';
//context
import { appContext } from '../../../../contexts/AppContext';

const ProductViewBody = (props) => {
    const { product } = props;

    const{editProduct, setEditProduct}= useContext(appContext);

    const handleSaveProduct = () => {
      alert('Producto guardado');
      console.log(editProduct);
      if(editProduct!={}){
        // fetch("http...", {
        //   method: "POST",
        //   body: JSON.stringify(obj),
        //   headers: {
        //     "Content-type": "application/json
        //   }
        // })
        // .then(data => data.json())
        // .then(posteo => console.log(posteo))
      }
    }
    return (
      <div className='productViewBodyContainer'>
          <ProductViewCard product={product}/>
          <ProductViewInfo product={product}/>
          <ProductViewImages product={product}/>
          <div className='productViewSaveCancel'>
            <button><Link to={"/products"} style={{ textDecoration: 'none', color: 'white' }}>Cancelar</Link></button>
            <button onClick={handleSaveProduct}>Guardar</button>
          </div>
      </div>
    )
}

export default ProductViewBody