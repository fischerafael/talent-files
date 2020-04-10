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

    return (
       <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="Talent Files"/>
                <span>Talent Files</span>
                <Link className="button button-menu" to="/login">Entrar</Link>                                         
            </div>

            <div className="profile-professional">
                <div className="profile-title">
                    <h1>Nossos Talentos</h1>
                    <input                         
                        type="email" 
                        placeholder="Procurar por Profissão"                        
                    />                    
                </div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                        <p>{user.firstName} {user.lastName}</p>              
                        <p>{user.profession}</p>
                        <p>{user.id}</p>                       
                        </li>
                    ))}                                        
                </ul>
            </div>              
            
       </div>
    );
}