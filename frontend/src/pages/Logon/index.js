import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';

import { FiTrash2 } from 'react-icons/fi';

export default function Logon(){
    const [servidor, setServidor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [registros, setRegistros] = useState([]);
    const [att, setAtt] = useState(true);
    var vetorReserva = [];

    async function cria(){
        const data = {
            servidor,
            descricao,
        };
        try {
            const response = await api.post('registros', data);
    
            alert(`Seu ID de Registro: ${response.data.id}`);
        } catch (error) {
            alert('Erro ao registro!');
        }

        setDescricao("");
        setAtt(!att);

    }

    function deleta(){
        try {
            api.delete(`registro/${descricao}`);
        } catch (error) {
            alert('Erro ao deletar!');
        }
        setAtt(!att);
    }

    useEffect(() => {
        api.get('registros').then(response =>{
            setRegistros(response.data);
        });
    }, [att]);

    return (
        <section className="conteiner">
            <header>
                <h1>CRUD - ReactJS NodeJS SQLite</h1>
            </header>
            <section className="registro" >
                <h2>Inserir Registro</h2>
                <p>Perfil</p>
                <select value={servidor} onChange={e => setServidor(e.target.value)} name="Selecione Servidor" id="servidor">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                
                <p>Descrição</p>  
                <textarea value={descricao} onChange={e => setDescricao(e.target.value)} id="text-area" cols="37" rows="7"></textarea>             
                <button onClick={cria} className="botao">
                    CRIAR
                </button>
            </section>
            <section id="list-event" className="conteiner-event">
                <h2>Ultimos Registrados</h2>
                <ul>
                    {registros.map(registro =>(
                        <li key={registro.id}>
                            <strong>Registro ID: {registro.id}</strong>
                            <strong>Servidor: {registro.servidor}</strong>
                            <p>{registro.descricao}</p>
                            <button onClick={deleta} type="button">
                                <FiTrash2 size={20} color="#A8A8B3"/>
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}