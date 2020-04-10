import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Profile() {
    const [skills, setSkills] = useState([]);

    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
 
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userEmail,
            }
        }).then(response => {
            setSkills(response.data);
        })
    }, [userEmail]);

    return (
       <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="Talent Files"/>
                <span>Olá, {userName}</span>
                <Link className="button button-menu">Ver Curriculo</Link>                    
                <button>
                    <FiPower size={20} color="3ad29f"/>
                </button>                          
            </div>

            <div className="profile-description">
                <div className="profile-title">
                    <h1>Perfil</h1>                    
                </div>
                <div className="description">
                    <strong>Rafael Fischer</strong>
                    <p>Desenvolvedor Fullstack NodeJS e React JS</p>
                    <button type="button">
                        <FiTrash2 size={20} color="3ad29f" />
                    </button>
                </div>
            </div>
            <Link className="button" type="button" to="/profile">+ Descrição</Link>
            
            <div className="profile-professional">
                <div className="profile-title">
                    <h1>Experiências Profissionais</h1>                    
                </div>                
                <ul>
                    {skills.filter(skill => skill.type == "professional").map(filteredSkill => (
                        <li key={filteredSkill.id}>
                        <p>{filteredSkill.period}</p>
                        <strong>{filteredSkill.title}</strong>
                        <p>{filteredSkill.description}</p>
                        <button type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                        </li>
                    ))}
                                        
                </ul>
                <Link className="button" type="button" to="/proskill">+ Experiência</Link>
            </div>
            
       </div>
    );
}