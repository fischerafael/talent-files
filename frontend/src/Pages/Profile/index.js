import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Profile() {
    const [skills, setSkills] = useState([]);

    const userEmail = localStorage.getItem('userEmail');
    const userName = localStorage.getItem('userName');

    const history = useHistory();
 
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userEmail,
            }
        }).then(response => {
            setSkills(response.data);
        })
    }, [userEmail]);

    async function handleDeleteSkill(id) {
        try {
            await api.delete(`skills/${id}`, {
                headers: {
                    Authorization: userEmail,
                }
            });
            
            setSkills(skills.filter(skill => skill.id !== id));            
        } catch (err) {
            alert('Erro ao deletar habilidade, tente novamente.');
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/login');
    }

    return (
       <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="Talent Files"/>
                <span>Talent Files</span>
                <Link className="button button-menu">Ver Curriculo</Link>                    
                <button onClick={handleLogout} >
                    <FiPower size={20} color="3ad29f"/>
                </button>                          
            </div>

            <div className="profile-professional">
                <div className="profile-title">
                    <h1>Perfil</h1>                    
                </div>
                <ul>
                    {skills.filter(skill => skill.type == "description").map(filteredSkill => (
                        <li key={filteredSkill.id}>
                        <p>{filteredSkill.period}</p>
                        <strong>{userName}</strong>
                        <p>{filteredSkill.description}</p>

                        <button onClick={() => handleDeleteSkill(filteredSkill.id)} type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                        </li>
                    ))}                                        
                </ul>
            </div>
            <Link className="button" type="button" to="/description">+ Descrição</Link>
            
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

                        <button onClick={() => handleDeleteSkill(filteredSkill.id)} type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                        </li>
                    ))}
                                        
                </ul>
                <Link className="button" type="button" to="/proskill">+ Experiência</Link>
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
                        <button onClick={() => handleDeleteSkill(filteredSkill.id)} type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                        </li>
                    ))}                                        
                </ul>
                <Link className="button" type="button" to="/eduskill">+ Experiência</Link>
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
                        <button onClick={() => handleDeleteSkill(filteredSkill.id)} type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                        </li>
                    ))}                                        
                </ul>
                <Link className="button" type="button" to="/skill">+ Experiência</Link>
            </div>
            
       </div>
    );
}