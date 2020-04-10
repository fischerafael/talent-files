import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import heroImg from '../../assets/hero2.png';
import './styles.css';


export default function Logon() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('sessions', { id, password });
            
            localStorage.setItem('userEmail', id);
            localStorage.setItem('userName', response.data.firstName);

            history.push('/profile');
        } catch (err) {
            alert('Não foi possível realizar o login. Tente novamente.')
        };
    };

    function handleRegister(e) {
        e.preventDefault();

        history.push('/register');
    }

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
                        <input 
                            className="login-email" 
                            type="email" 
                            placeholder="Seu email"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        /> 
                        <input 
                            className="login-password" 
                            type="password" 
                            placeholder="Sua senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className="login-button">
                            <button className="button" type="submit" onClick={handleLogin}>Entrar</button> 
                            <button className="button" type="submit" onClick={handleRegister}>Cadastrar-se</button>   
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