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
    
    const [values, handleChange] = useForm(product);
    
    if(product._id === 0 && products.length > 0){
      product._id = products.length + 1;
      values._id = products.length + 1;
    }

    const handleSaveProducts = () => {

      if(values._id > products.length){
        
        //api nuevo producto
        fetch(`http://localhost:3030/api/agregarNuevoProducto`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json"
          }
        });
        console.log("producto agregado");

      }else{
        
        //api editar producto
        fetch(`http://localhost:3030/api/editarProducto/${values._id}`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json"
          }
        })

        console.log("producto actualizado");
        
      }
    }

    return (
      <div className='productViewBodyContainer'>
          <ProductViewCard product={product}/>
          <ProductViewInfo product={{values, handleChange}}/>
          <ProductViewImages product={{product, values, handleChange}}/>
          <div className='productViewSaveCancel'>
            <button><Link to={"/products"} style={{ textDecoration: 'none', color: 'white' }}>Cancelar</Link></button>
            <button onClick={handleSaveProducts}>Guardar</button>
          </div>
      </div>
    )
}

export default ProductViewBody