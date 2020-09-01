import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link to="/" className="Navbar__brand">
                        <img className="Navbar__brand_logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light titulo1">Platzi</span>
                        <span className="font-weight-bold titulo2">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;