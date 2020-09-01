import React from 'react';

import './styles/PageError.css';
import ImgError from '../images/error.png';

function PageError(props) {
  return <div className="PageError">
    <div className="imagenError">
      <img src={ImgError} alt=""/>
    </div>
    <div className="mensajeError">
      ❌{props.error.message}😱
    </div>
  </div>;
}

export default PageError;
