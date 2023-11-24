// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    return (
        <header>
            <h1>Meu App</h1>
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
