import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';
import logo from '../../assets/logo.png';

export default function CV() {
    const [cv, setCV] = useState([]);    

    useEffect((id) => {
        api.get(`profile/${id}`).then(response => {
            setCV(response.data);
        })
    }, []);   

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="Talent Files"/>
                <span>Talent Files</span>
                <Link to="/" className="button button-menu">Voltar</Link>                                    
            </div>
            <div className="profile-professional">
                <div className="profile-title">
                    <h1>{cv.id}</h1>
                </div>
                <h1>Descrição</h1>
                <ul>                    
                    <li>Arquiteto e Urbanista</li>                                                        
                </ul>
                <h1>Experiências Profissionais</h1>
                <ul>                    
                    <li>Arquiteto e Urbanista</li>                                                        
                </ul>
                <h1>Educação</h1>
                <ul>                    
                    <li>Arquiteto e Urbanista</li>                                                        
                </ul>
                <h1>Habilidades</h1>
                <ul>                    
                    <li>Arquiteto e Urbanista</li>                                                        
                </ul>
            </div>
        </div>        
    );
}