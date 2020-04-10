import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

export default function Home() {
    const [users, setUsers] = useState([]);   
 
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data);
        })
    }, []); 
    
    function handleUserSearch() {
        
    }
    //<input placeholder="Procurar por Profissão"/>
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
                    {users.map(user => (
                        <li key={user.id}>
                        <strong>{user.firstName} {user.lastName}</strong>              
                        <p>{user.profession}</p>
                        <p>{user.id}</p>  
                        <p>{user.city},{user.uf}</p>                     
                        </li>
                    ))}                                        
                </ul>
            </div>              
            
       </div>
    );
}