import React, { useContext, useState } from 'react';
//context
import { appContext } from '../../../../contexts/AppContext';

const ProductViewInfo = (props) => {
  
  const { product } = props;

  const [stock, setStock] = useState(product.stock);

  const sumStock = () => {
    setStock(stock + 1);
    handleOnChangeInputs();
  }
  const subStock = () => {
    if(stock > 0) setStock(stock - 1);
    handleOnChangeInputs();
  }

  const{editProduct, setEditProduct}= useContext(appContext);

  const handleOnChangeInputs = (e) => {
    const { name, value } = e.target;
    setEditProduct({...editProduct, [name]: value});
    setEditProduct({...editProduct, "stock": stock});
  }

  return (
    <div className='productViewInfoContainer'>

      <h3>Información</h3>
      <form>
        
        <label>Nombre</label>
        <input name='nombre' type="text" placeholder='InputValue' autoComplete='off' defaultValue={product.nombre} onChange={handleOnChangeInputs}></input>
        
        <label>Valor</label>
        <input name='puntos' type="text" placeholder='InputValue' autoComplete='off' defaultValue={product.puntos} onChange={handleOnChangeInputs}></input>
        
        <label>Stock</label>
        <div className="agregar-quitar">
          <p className="quitarprod" onClick={subStock}>-</p>
          <span> {stock} </span>
          <p className="agregarprod" onClick={sumStock}>+</p>
        </div>
        
        <label>Descripcion</label>
        <textarea name='description' rows="5" placeholder='InputValue' defaultValue={product.description} onChange={handleOnChangeInputs}></textarea>
        
        <label>Tienda</label>
        <select>
            <option hidden>--selecciona--</option>
            <option value="olivia">Olivia</option>
        </select>

      </form>
      
    </div>
  )
}

export default ProductViewInfo