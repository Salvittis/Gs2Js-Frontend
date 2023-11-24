// Main.js
import React from 'react';

const Main = () => {
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));

    return (
        <div>
            <h1>Bem-vindo, {usuario.nome}!</h1>
            <p>Email: {usuario.email}</p>
        </div>
    );
};

export default Main;
