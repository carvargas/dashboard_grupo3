import React from 'react'

const ProductViewImages = (props) => {

  const { product } = props;

  return (
    <div className='productViewImageContainer productViewInfoContainer'>

      <h3>Galeria de imagenes</h3>
      <form>
        
        <label>Nueva imagen</label>
        <input type="text" placeholder='InputValue' autoComplete='off'></input>
        
        <label>Imagenes actuales</label>
        
        {
          product.gallery.map((image, index) => {
            return (
              <div key={index}>
                <div className='productViewImageItem'>
                  <div>
                    <img src={image} alt='product'></img>
                    <p>{image}</p>
                  </div>
                  <button>Quitar</button>
                </div>
                <div className='href'>{image}</div>
              </div>
            )
          })
        }

      </form>
      
    </div>
  )
}

export default ProductViewImages