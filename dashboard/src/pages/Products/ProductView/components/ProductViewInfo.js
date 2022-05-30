import React, { useState } from 'react';
//context
import { useForm } from '../../../../hooks/useForm';

const ProductViewInfo = (props) => {
  const { product } = props;
  const {values, handleChage} = useForm(product)

  const [stock, setStock] = useState(product.stock);

  const sumStock = () => {
    setStock(stock + 1);
  }
  const subStock = () => {
    if(stock > 0) setStock(stock - 1);
  }

  return (
    <div className='productViewInfoContainer'>

      <h3>Información</h3>
      <form>
        
        <label>Nombre</label>
        <input type="text" placeholder='InputValue' name='nombre' onChange={handleChage} autoComplete='off' defaultValue={values} ></input>
        
        <label>Valor</label>
        <input type="text" placeholder='InputValue' name='puntos' onChange={handleChage} autoComplete='off' defaultValue={values} ></input>
        
        <label>Stock</label>
        <div className="agregar-quitar">
          <p className="quitarprod" onClick={subStock}>-</p>
          <span> {stock} </span>
          <p className="agregarprod" onClick={sumStock}>+</p>
        </div>
        
        <label>Descripcion</label>
        <textarea rows="5" placeholder='InputValue' name='description' onChange={handleChage} defaultValue={values} ></textarea>
        
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