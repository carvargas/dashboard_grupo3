import React from 'react'

const ProductViewImages = (props) => {

  let { values, handleChange } = props.product;

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

      <form name='form'>
        
        <label id='newImage'> Nueva imagen </label>
        <input type="text"
               aria-labelledby='newImage'
               placeholder='InputValue' 
               autoComplete='off' 
               onBlur={handleAgregarImagen}
        />
        
        {values.gallery.length !== 0 ? <label>Imagenes actuales</label> : <label>No hay imagenes actuales</label>}
        
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