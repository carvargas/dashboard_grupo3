import React, { useEffect, useState } from 'react';

const ProductViewInfo = (props) => {

  const { values, handleChange } = props.product;
  
  const [stock, setStock] = useState(values.stock);
  const sumStock = (e) => {
    e.preventDefault();
    setStock(stock + 1);
  }
  const subStock = (e) => {
    e.preventDefault();
    if(stock > 0) setStock(stock - 1);
  }
  useEffect(() => {
    handleChange({target: {name: 'stock', value: stock}});
  }, [stock]);

  return (
    <div className='productViewInfoContainer'>

      <h3>Información</h3>
      <form name='form'>
        
        <label id='nombre'>Nombre</label>
        <input  type="text" 
                placeholder='InputValue' 
                aria-labelledby='nombre' 
                name='nombre' 
                onChange={handleChange} 
                autoComplete='off' 
                defaultValue={values.nombre}
        />
        
        <label id='puntos'>Valor</label>
        <input  type="text" 
                placeholder='InputValue' 
                aria-labelledby='puntos' 
                name='puntos' 
                onChange={handleChange} 
                autoComplete='off' 
                defaultValue={values.puntos} 
        />
        
        <label id='stock'>Stock</label>
        <div className="agregar-quitar">
          <button className="quitarprod" onClick={subStock}><i className="fa-solid fa-minus"></i></button>
            <input type="text"
                   aria-labelledby='stock'
                   name='stock' 
                   value={stock}
                   className='inputStock'  
                   onChange={handleChange}
                   disabled
            />
          <button className="agregarprod" onClick={sumStock}><i className="fa-solid fa-plus"></i></button>
        </div>
        
        <label id='desc'>Descripcion</label>
        <textarea rows="5" 
                  placeholder='InputValue' 
                  aria-labelledby='desc'
                  name='description' 
                  onChange={handleChange} 
                  defaultValue={values.description} 
        />
        
        <label id='tienda'>Tienda</label>
        <select aria-labelledby='tienda'>
            <option hidden>--selecciona--</option>
            <option value="olivia">Olivia</option>
        </select>

      </form>
      
    </div>
  )
}

export default ProductViewInfo