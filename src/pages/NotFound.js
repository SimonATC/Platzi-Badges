import React from 'react';
import './styles/NotFound.css';
import error from '../images/error.png';

function NotFound(){
    return (
        <div className="noEncontrado">
            <img src={error} alt=""/>
            <h3>Algo esta mal, <br />lo siento amiguito</h3>
        </div>
    )
}

export default NotFound;