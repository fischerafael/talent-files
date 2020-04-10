import React, { useState } from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function EduSkill() {    
    const [period, setPeriod] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const userEmail = localStorage.getItem('userEmail');

    const history = useHistory();   

    async function handleNewSkill(e) {
        e.preventDefault();

        const data = {
            type: "education",
            period,
            title,
            description,
        };

        try {
            await api.post('skills', data, {
                headers: {
                    Authorization: userEmail,
                }
            })

            history.push('/profile');
        } catch (err) {
            alert("Erro ao cadastrar habilidade.");
        };
    }

    

    return (
        <div className="proskill-container">
            <div className="proskill-content">  
                <h1>Educação</h1>                 
                    <form className="proskill-form">
                        <div className="proskill-f1">   
                                                                                                         
                        </div>
                        <div className="proskill-f2">                          
                            <input 
                                className="proskill-input-text" 
                                placeholder="Período (Ex: 2017 - 2018)"
                                value={period}                                
                                onChange={e => setPeriod(e.target.value)}
                            />                         
                            <input 
                                className="proskill-input-text" 
                                placeholder="Curso"
                                value={title}                                
                                onChange={e => setTitle(e.target.value)}
                            />      
                            <textarea 
                                className="proskill-input-text" 
                                placeholder="Descrição (Ex: Universidade, Departamento, Cidade, Estado e País)"
                                value={description}                                
                                onChange={e => setDescription(e.target.value)}
                            />     
                            <button onClick={handleNewSkill} className="button button-proskill" type="submit">Adicionar Experiência</button>
                        </div>                                                
                        <div className="proskill-button">                            
                            <Link to="/profile">
                                <FiArrowLeft size={20} color="3ad29f"/>
                                Voltar
                            </Link>                             
                        </div>                           
                    </form>   
            </div>               
                
        </div>
    );
}