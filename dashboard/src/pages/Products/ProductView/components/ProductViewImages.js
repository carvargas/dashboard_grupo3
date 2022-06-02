import React from 'react'

const ProductViewImages = (props) => {

  const { product, values, handleChange } = props.product;

  const handleQuitarImagen = (e) => {
    e.preventDefault();
    console.log("Imagen eliminada"); // console log para ver que se elimina la imagen
    let newGallery = values.gallery.filter(img => img !== e.target.value);
    handleChange({target: {name: 'gallery', value: newGallery}});
  }

  const handleAgregarImagen = (e) => {
    e.preventDefault();
    if(e.target.value.trim() !== ''){
      console.log("Imagen agregada"); //console log para ver que se agrega la imagen
      let newGallery = values.gallery;
      newGallery.push(e.target.value);
      handleChange({target: {name: 'gallery', value: newGallery}});
    }
  }; 

  return (
    <div className='productViewImageContainer productViewInfoContainer'>

      <h3>Galeria de imagenes</h3>
      <form>
        
        <label>Nueva imagen</label>
        <input type="text" placeholder='InputValue' autoComplete='off' onBlur={handleAgregarImagen}></input>
        
        {product.gallery.length !== 0 && <label>Imagenes actuales</label>}
        
        {
          values.gallery.length !== 0 &&
          values.gallery.map((image, index) => {
            return (
              <div key={index}>
                <div className='productViewImageItem'>
                  <div>
                    <img src={image} alt='product'></img>
                    <p>{image}</p>
                  </div>
                  <button onClick={handleQuitarImagen} value={image}>Quitar</button>
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