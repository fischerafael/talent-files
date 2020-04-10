import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';

export default function Profile() {
    const [skills, setSkills] = useState([]);

    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');
    const userLast = localStorage.getItem('userLast');   
 
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
                <span>Talent Files</span>
                <Link to="/" className="button button-menu">Voltar</Link>                                   
            </div>

            <div className="profile-professional">
                <div className="profile-title">
                    <h1>{userName} {userLast}</h1>                    
                </div>
                <ul>
                    {skills.filter(skill => skill.type == "description").map(filteredSkill => (
                        <li key={filteredSkill.id}>                      
                        <p>{filteredSkill.description}</p>                        
                        </li>
                    ))}                                        
                </ul>
            </div>            
            
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
                        </li>
                    ))}                                        
                </ul>                
            </div>
            
            <div className="profile-professional">
                <div className="profile-title">
                    <h1>Educação</h1>                    
                </div>                
                <ul>
                    {skills.filter(skill => skill.type == "education").map(filteredSkill => (
                        <li key={filteredSkill.id}>
                        <p>{filteredSkill.period}</p>
                        <strong>{filteredSkill.title}</strong>
                        <p>{filteredSkill.description}</p>                        
                        </li>
                    ))}                                        
                </ul>                
            </div>

            <div className="profile-professional">
                <div className="profile-title">
                    <h1>Habilidades</h1>                    
                </div>                
                <ul>
                    {skills.filter(skill => skill.type == "skills").map(filteredSkill => (
                        <li key={filteredSkill.id}>
                        <p>{filteredSkill.period}</p>
                        <strong>{filteredSkill.title}</strong>
                        <p>{filteredSkill.description}</p>                        
                        </li>
                    ))}                                        
                </ul>                
            </div>                        
        </div>
    );
}