import React from 'react'

const ProductViewInfo = (props) => {
  
  const { product } = props;

  return (
    <div className='productViewInfoContainer'>

      <h3>Información</h3>
      <form>
        
        <label>Nombre</label>
        <input type="text" placeholder='InputValue' autoComplete='off'></input>
        
        <label>Valor</label>
        <input type="text" placeholder='InputValue' autoComplete='off'></input>
        
        <label>Stock</label>
        <div className="agregar-quitar">
          <p className="quitarprod">-</p>
          <span> {product.stock} </span>
          <p className="agregarprod">+</p>
        </div>
        
        <label>Descripcion</label>
        <textarea rows="5" placeholder='InputValue'></textarea>
        
        <label>Tienda</label>
        <select>
            <option hidden>--selecciona--</option>
            <option value="olivia">Olivia</option>
            <option value="otra tienda">Otra tienda</option>
        </select>

      </form>
      
    </div>
  )
}

export default ProductViewInfo