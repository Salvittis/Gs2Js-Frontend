import React from 'react';
import { Link } from 'react-router-dom';
import './css/header.css'

const Header = () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    return (
        <header>
            <h1 className="title">ConsultasOn</h1>
            {usuario && (
                <div>
                    <p>Bem-vindo, {usuario.nome}!</p>
                    <Link to="/logout">Logout</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
