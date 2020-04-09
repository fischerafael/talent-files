import React from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import heroImg from '../../assets/hero2.png';
import './styles.css';


export default function Logon() {
    return (
        <div className="container">
            <div className="container-content">
                <div className="container-content-img">
                    <img src={heroImg} alt=""/>
                </div>
                <div className="container-content-form">
                    <div className="container-content-form-text">
                        <h1>Login</h1>    
                    </div> 
                    <form>
                        <input className="email" type="text" placeholder="Seu email"/> 
                        <input className="password" type="text" placeholder="Sua senha"/>
                        <div className="container-content-form-input-button">
                            <button className="button" type="submit">Entrar</button> 
                            <button className="button" type="submit" >Cadastrar-se</button>   
                        </div>
                        <a href="/">
                            <FiArrowLeft size={20} color="3ad29f"/>
                            Voltar
                        </a>   
                    </form>   
                </div>
            </div>
        </div>
    );     
}