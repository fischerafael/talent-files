import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="register-content">  
                <h1>Cadastre-se</h1>                 
                    <form className="register-form">
                        <div className="register-f1">                            
                            <input className="register-input-text" type="email" placeholder="Email"/> 
                            <input minlength="6" className="register-input-text" type="password" placeholder="Senha (Mínimo 6 caracteres)"/>
                            <input className="register-input-text" placeholder="Nome"/>
                            <input className="register-input-text" placeholder="Sobrenome"/>
                        </div>
                        <div className="register-f2">
                            <input className="register-input-text" placeholder="Cargo Pretendido"/>
                            <input minlength="10" maxlength="11" className="register-input-text" placeholder="Whatsapp (Ex: 41 9 9999 9999)"/>
                            <div className="register-form-location">
                                <input className="register-input-text" placeholder="Cidade"/>
                                <input minlength="2" maxlength="2" className="register-input-text" placeholder="UF"/>
                            </div>
                            <button className="button button-register" type="submit">Finalizar Cadastro</button> 
                        </div>                                                
                        <div className="register-button">                            
                            <Link to="/login">
                                <FiArrowLeft size={20} color="3ad29f"/>
                                Voltar
                            </Link>                             
                        </div>                           
                    </form>   
            </div>               
                
        </div>
        
    );
}