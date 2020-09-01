import React from 'react';
import { Link } from'react-router-dom'

import astro from'../images/home.svg'
import confLogo from'../images/platzi-conf-logo.svg'
import './styles/Home.css'


class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <dir className="col-text">
                    <img src={confLogo} alt="Platzi conf logo"/>
                    <p>
                        <h1>BADGE MANAGEMENT SYSTEM</h1>
                        <Link className="btn btn-primary"to="/badges">Start</Link>
                    </p>
                </dir>
                <dir className="col-img">
                    <img src={astro} alt="Astronauta"/>
                </dir>
		    </div>
        );
    }
}

export default Home;