import React, { useState } from 'react';

const ProductViewInfo = (props) => {

  const { product, values, handleChange } = props.product;  

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
        <input type="text" placeholder='InputValue' name='nombre' onChange={handleChange} autoComplete='off' defaultValue={values.nombre} ></input>
        
        <label>Valor</label>
        <input type="text" placeholder='InputValue' name='puntos' onChange={handleChange} autoComplete='off' defaultValue={values.puntos} ></input>
        
        <label>Stock</label>
        <div className="agregar-quitar">
          <p className="quitarprod" onClick={subStock}><i className="fa-solid fa-minus"></i></p>
            <input type="number" name='stock' value={stock} className='inputStock' disabled/>
          <p className="agregarprod" onClick={sumStock}><i className="fa-solid fa-plus"></i></p>
        </div>
        
        <label>Descripcion</label>
        <textarea rows="5" placeholder='InputValue' name='description' onChange={handleChange} defaultValue={values.description} ></textarea>
        
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