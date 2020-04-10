import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

export default function Register() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profession, setProfession] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {        
        e.preventDefault();

        const data = {
            id,
            password,
            firstName,
            lastName,
            profession,
            whatsapp,
            city,
            uf,
        };       

        try {
            const response = await api.post('users', data);
            alert(`Cadastro de ${response.data.id} realizado com sucesso.`);
        } catch (err) {
            alert("Erro ao realizar o cadastro.");
        };
    }

    return (
        <div className="register-container">
            <div className="register-content">  
                <h1>Cadastre-se</h1>                 
                    <form onSubmit={handleRegister} className="register-form">
                        <div className="register-f1">                            
                            <input 
                                className="register-input-text" 
                                type="email" 
                                placeholder="Email"
                                value={id}
                                onChange={e => setId(e.target.value)}
                            /> 
                            <input 
                                minLength="6" 
                                className="register-input-text" 
                                type="password" 
                                placeholder="Senha (Mínimo 6 caracteres)"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <input 
                                className="register-input-text" 
                                placeholder="Nome"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                            <input 
                                className="register-input-text" 
                                placeholder="Sobrenome"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="register-f2">
                            <input 
                                className="register-input-text" 
                                placeholder="Cargo Pretendido"
                                value={profession}
                                onChange={e => setProfession(e.target.value)}
                            />
                            <input 
                                minLength="10" 
                                maxLength="11" 
                                className="register-input-text" 
                                placeholder="Whatsapp (Ex: 41 9 9999 9999)"
                                value={whatsapp}
                                onChange={e => setWhatsapp(e.target.value)}
                            />
                            <div className="register-form-location">
                                <input 
                                    className="register-input-text" 
                                    placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)}
                                />
                                <input 
                                    minLength="2" 
                                    maxLength="2" 
                                    className="register-input-text" 
                                    placeholder="UF"
                                    value={uf}
                                    onChange={e => setUf(e.target.value)}
                                />
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