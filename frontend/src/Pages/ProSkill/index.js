import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProSkill() {
    return (
        <div className="proskill-container">
            <div className="proskill-content">  
                <h1>Experiências Profissionais</h1>                 
                    <form className="proskill-form">
                        <div className="proskill-f1">   
                            <input className="proskill-input-text" placeholder="Período (Ex: 2017 - 2018)"/>                         
                            <input className="proskill-input-text" placeholder="Cargo Ocupado"/>
                            <button className="button button-proskill" type="submit">Adicionar Experiência</button>                                                       
                        </div>
                        <div className="proskill-f2">                            
                            <textarea className="proskill-input-text" placeholder="Descrição"/> 
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