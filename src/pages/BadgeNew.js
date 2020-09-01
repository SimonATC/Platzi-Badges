import React from 'react';
import header from '../images/platzi-conf-logo.svg';
import './styles/Badge__new.css';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import md5 from 'md5'
import PageLoading from '../components/PageLoading.js'

class BadgeNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
    }   };

    handleChange = e => { 
        this.setState({
            form: {
                ... this.state.form,  //CON ESTO TRAEMOS LOS VALORES QUE YA TIENE EL OBJETO FORM, SI ES QUE LOS TIENE
                [e.target.name] : e.target.value // CON ESTO AGREGAMOS EL NUEVO VALOR AL OBJETO FORM
            }
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const hash = md5(this.state.form.email);
        this.state.form = {
            ...this.state.form,
            avatarUrl: `https://gravatar.com/avatar/${hash}?d=identicon`,
        }
        this.setState({loading: true, error: null});

        
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render(){
        if(this.state.loading){
            return(
                <PageLoading />
            );
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge                                  
                                firstName={this.state.form.firstName || 'First Name'} 
                                lastName={this.state.form.lastName || 'Last Name'} 
                                twitter={this.state.form.twitter || 'twitter'}  
                                jobTitle={this.state.form.jobTitle || 'Job_title'}
                                email={this.state.form.email || 'email'} 
                                avatar="https://s.gravatar.com/avatar/0cca96c3e6dd43a490b5ac0d209c856a?s=80"
                            />
                        </div>
                        <div className="col">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit = {this.handleSubmit}
                                formValues={this.state.form} 
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        )
    }
}

export default BadgeNew;