import React from 'react';
import './styles/BadgeDetails.css';
import confLogo from '../images/platzi-conf-logo.svg';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max){ //FUNCION DE HOOK
    const [count, setCount] = React.useState(0); //INICIALIZANDO EL HOOK EN 0, Normalmente, las variables “desaparecen” cuando se sale de la función, pero las variables de estado son conservadas por React. El único argumento para el Hook useState() es el estado inicial

     if(count > max){
         setCount(0);
     }
     return[count, setCount]; //RETORNANDO LOS VALORES DEL HOOK, SIEMPRE SERA MENOR AL NUMERO MAX YA QUE CUANDO LLEGA A EL VUELVE A 0
}

function BadgeDetails(props){
    const [count, setCount] = useIncreaseCount(4);
    const badge = props.badge;
   
    return(
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>

                        <div className="col">

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge                                  
                            firstName={badge.firstName || 'First Name'} 
                            lastName={badge.lastName || 'Last Name'} 
                            twitter={badge.twitter || 'twitter'}  
                            jobTitle={badge.jobTitle || 'Job_title'}
                            email={badge.email || 'email'} 
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => {
                                    setCount(count+1); 
                                }} className="btn btn-primary mr-4">
                                    Increase Count: {count}
                                </button>

                                <Link className="btn btn-primary mb-4 mt-4" to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button onClick={props.onOpenModal} className="btn btn-danger" to={`/badges/${badge.id}/edit`}>Delete</button>
                            <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
                        </div>
                    </div>
                </div>
            </div>
                

            </div>
    )
 }

 export default BadgeDetails;