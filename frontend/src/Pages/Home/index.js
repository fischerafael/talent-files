import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Home() {
    const [users, setUsers] = useState([]);   

    const history = useHistory();
 
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data);
        })
    }, []); 
    
    function consultCV(id, firstName, lastName) {
        localStorage.setItem('userEmail', id);
        localStorage.setItem('userName', firstName);
        localStorage.setItem('userLast', lastName);
        history.push('/cv');
    }
    //<input placeholder="Procurar por Profissão" value={users} onChange={e => setUsers(e.target.value)} />
    return (
       <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="Talent Files"/>
                <span>Talent Files</span>
                <Link className="button button-menu" to="/login">Entrar</Link>                                         
            </div>
            
            <div className="profile-professional-main">
                <div className="profile-title">
                    <h1>Nossos Talentos</h1>                                        
                </div>
                
                <ul>
                    {users.filter(user => user.profession.includes("")).map(filteredUser => (
                        <li key={filteredUser.id}>
                        <strong>{filteredUser.firstName} {filteredUser.lastName}</strong>              
                        <p>{filteredUser.profession}</p>
                        <p>{filteredUser.id}</p>  
                        <p>{filteredUser.city}, {filteredUser.uf}</p> 
                        <button className="button" onClick={() => consultCV(filteredUser.id, filteredUser.firstName, filteredUser.lastName)}>Ver Currículo</button>                    
                        </li>
                    ))}                                                            
                </ul>
            </div>              
            
       </div>
    );
}