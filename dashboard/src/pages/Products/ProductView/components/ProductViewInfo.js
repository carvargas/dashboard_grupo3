import React from 'react'
import { useForm } from '../../../../hooks/useForm';

const ProductViewInfo = (props) => {
  const { product } = props;
  const {values, handleChage} = useForm(product)

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
          <p className="quitarprod">-</p>
          <span> {product.stock} </span>
          <p className="agregarprod">+</p>
        </div>
        
        <label>Descripcion</label>
        <textarea rows="5" placeholder='InputValue' name='description' onChange={handleChage} defaultValue={values} ></textarea>
        
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