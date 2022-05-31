import React from 'react'
import { Link } from 'react-router-dom';
//components
import ProductViewCard from './ProductViewCard';
import ProductViewImages from './ProductViewImages';
import ProductViewInfo from './ProductViewInfo';
//context
import { useForm } from '../../../../hooks/useForm';
import useProductListFetch from '../../../../hooks/useProductListFetch';

const ProductViewBody = (props) => {

    const { product } = props;

    const [products] = useProductListFetch();

    if(product._id === 0 && products.length > 0){
      product._id = products.length + 1;
    }
    const [values, handleChange] = useForm(product);

    const handleSaveProducts = () => {
      if(values._id > products.length){
        console.log("Nuevo producto: " + JSON.stringify(values));
        //api agregar producto
      }else{
        console.log("Actualizar producto: " + JSON.stringify(values));
        //api editar producto
      }
    }
    

    return (
      <div className='productViewBodyContainer'>
          <ProductViewCard product={product}/>
          <ProductViewInfo product={{product, values, handleChange}}/>
          <ProductViewImages product={product}/>
          <div className='productViewSaveCancel'>
            <button><Link to={"/products"} style={{ textDecoration: 'none', color: 'white' }}>Cancelar</Link></button>
            <button onClick={handleSaveProducts}>Guardar</button>
          </div>
      </div>
    )
}

export default ProductViewBody