import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import heroImg from '../../assets/hero2.png';
import './styles.css';


export default function Logon() {
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-img">
                    <img src={heroImg} alt=""/>
                </div>
                <div className="login-form">
                    <div className="login-form-text">
                        <h1 className="login-h1">Login</h1>    
                    </div> 
                    <form>
                        <input className="login-email" type="email" placeholder="Seu email"/> 
                        <input className="login-password" type="password" placeholder="Sua senha"/>
                        <div className="login-button">
                            <button className="button" type="submit">Entrar</button> 
                            <button className="button" type="submit">Cadastrar-se</button>   
                        </div>
                        <Link to="/">
                            <FiArrowLeft size={20} color="3ad29f"/>
                            Voltar
                        </Link>   
                    </form>   
                </div>
            </div>
        </div>
    );     
}