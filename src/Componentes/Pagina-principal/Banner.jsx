import React from 'react'
import Woman from './Img-banner/homewoman.png'
import Otros from './Img-banner/otros.jpg'


export const Banner = () => {
  return (
    <div>
        <Images/>
    </div>
  )
}

function Images() {
  return (
    <div>
    <div className="images">
        <div className="image-woman">
          <img src={Woman} alt="womanpic" />
          <h2 className="collection-title-woman">MUJER</h2>
        </div>
        <div className="image-man">
          <img src={require('./Img-banner/homeman.png')} alt="manpic" />
          <h2 className="collection-title-woman">HOMBRE</h2>
        </div>
      </div>
      <div className="image-accesorios">
        <img src={Otros} alt="accesorios" />
        <h2 className="collection-title-accesorios">ACCESORIOS</h2>
      </div>
    
    </div>
  );
}

export default Images;
