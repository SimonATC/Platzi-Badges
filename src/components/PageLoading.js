import React from 'react'; 
import './styles/PageLoading.css';
import Loader from './Loader.js'

function PageLoading (){
    return (
        <div className="PageLoading">
            <Loader/>
        </div>
    );
}

export default PageLoading;