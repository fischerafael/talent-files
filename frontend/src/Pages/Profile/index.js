import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';

export default function Profile() {
    return (
       <div className="profile-container">
            <div className="profile-header">
                <img src={logo} alt="Talent Files"/>
                <span>Olá, Rafael</span>
                <Link className="button button-menu">Ver Curriculo</Link>                    
                <button>
                    <FiPower size={20} color="3ad29f"/>
                </button>                          
            </div>

            <div className="profile-description">
                <div className="profile-title">
                    <h1>Perfil</h1>
                    <button class="button" type="button">+ Descrição</button>
                </div>
                <div className="description">
                    <strong>Rafael Fischer</strong>
                    <p>Desenvolvedor Fullstack NodeJS e React JS</p>
                    <button type="button">
                        <FiTrash2 size={20} color="3ad29f" />
                    </button>
                </div>
            </div>
            
            <div className="profile-professional">
                <div className="profile-title">
                    <h1>Experiências Profissionais</h1>
                    <button class="button" type="button">+ Experiência</button>
                </div>                
                <ul>
                    <li>
                        <p>2018 - Atualmente</p>
                        <strong>Desenvolvedor Fullstack</strong>
                        <p>Desenvolvimento de aplicações web utilizando a stack NodeJS e ReactJS</p>
                        <button type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                    </li>
                    <li>
                        <p>2018 - Atualmente</p>
                        <strong>Desenvolvedor Fullstack</strong>
                        <p>Desenvolvimento de aplicações web utilizando a stack NodeJS e ReactJS</p>
                        <button type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                    </li>
                    <li>
                        <p>2018 - Atualmente</p>
                        <strong>Desenvolvedor Fullstack</strong>
                        <p>Desenvolvimento de aplicações web utilizando a stack NodeJS e ReactJS</p>
                        <button type="button">
                            <FiTrash2 size={20} color="3ad29f" />
                        </button>
                    </li>
                </ul>
            </div>
            
       </div>
    );
}