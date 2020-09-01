import React from 'react'
import { Link } from 'react-router-dom';

import BadgesList from '../components/BadgesList.js'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'
import MiniLoader from '../components/MiniLoader.js'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import api from '../api'

class Badges extends React.Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.fetchData();
        
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillMount(){
        clearInterval(this.intervalId);
    }

    fetchData = async () =>{
        this.setState({loading:true, error: null});
        
        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }


    componentDidUpdate(prevProps, prevState){
        console.log('ComponentDidUpdate 5');
        console.log({
            prevProps: prevProps, 
            prevState: prevState
        })

        console.log({
           props: this.props, 
           state: this.state 
        });
    }

    componentWillUnmount(){
        console.log('componentWillUnmount 6'); 
        clearTimeout(this.timeoutId);
    }

    render(){
        if(this.state.loading === true && !this.state.data){
            return <PageLoading/>;
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>;
        }

        
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="Conf Logo" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>
                
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge 
                        </Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        {this.state.loading && <MiniLoader />}
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>


            </React.Fragment>
        );
    }
}

export default Badges;