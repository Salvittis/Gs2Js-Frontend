// Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Limpar os dados da sessão, por exemplo:
        sessionStorage.removeItem('usuario');

        // Navegar de volta para a tela de login ou outra tela inicial
        navigate('/');
    };
    const handleLogoutN = () => {
        navigate('/main');
    };

    return (
        <div>
            <h1>Logout</h1>
            <p>Tem certeza que deseja sair?</p>
            <button onClick={handleLogout}>Sim</button>
            <button onClick={handleLogoutN}>Não</button>
        </div>
    );
};

export default Logout;
