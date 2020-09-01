import React from 'react';

import './styles/BadgesLista.css'
import { Link } from 'react-router-dom';

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
   
    const [filteredBadges, SetfilteredBadges] = React.useState(badges); 

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });

        SetfilteredBadges(result);

    }, [badges, query]);

    return {query, setQuery, filteredBadges};
}

function BadgesList(props){
    const badges = props.badges; 

    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if(filteredBadges.length === 0){
        return(
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange = { (e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                    <h3>No encontramos ningun Badge</h3>
                    <Link to="/badges/new" className="btn btn-primary">Crear nuevo Badge</Link>
                </div>
            )
        }
        

        return(
            <ul className="list-unstyled BadgesList">
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={query}
                        onChange = { (e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                
                {filteredBadges.map((badge)=>{
                return(
                    <li key={badge.id}>
                        <Link to={`/badges/${badge.id}`} className="BadgesListItem text-reset text-decpration-none">
                            <img src={badge.avatarUrl} alt=""className="BadgesListItem__avatar"/>
                            <div>
                                <div><strong>{badge.firstName}</strong></div>
                                <div className="Twitter__name">
                                    <span className="Twitter__logo"></span>@{badge.twitter}
                                </div>
                                <div className="tipoPersonaje">
                                    <span>{badge.jobTitle} - {badge.email}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
                })}
            </ul>
        );
}

export default BadgesList;