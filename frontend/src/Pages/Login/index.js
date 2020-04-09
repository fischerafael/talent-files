import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo-494ca2-e3e7f1.png';
import heroImg from '../../assets/hero2.png';

export default function Logon() {
    return (
        <div className="container">
            <div className="login-container">
                <div className="login">                    
                    <section className="form">                        
                        <form>
                            <div className="form-call">
                                <img src={logo} alt="Talent Files Logo"/>
                                <h1>Login</h1>
                            </div>                            
                            <div className="inputs">
                                <input placeholder='Email' type='email'/>
                                <input placeholder='Senha' type='password'/>
                                <div className="inputs-button">
                                    <button className='button' type='submit'>Entrar</button>
                                    <button className='button button-reg' type='submit'>Cadastre-se</button>
                                </div>                                
                            </div>                   
                            <a href="/cadastro">
                                <FiLogIn size={20} color="3ad29f" />
                                Voltar
                            </a>
                        </form>
                    </section>
                </div>                
                <img src={heroImg} alt="Talent Files"/>
            </div>
        </div>        
    );     
}