import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/logout.css"
const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('usuario');
        navigate('/');
        window.location.reload();
    };
    const handleLogoutN = () => {
        navigate('/main');
        window.location.reload();
    };

    return (

        <div class="logout-container">
            <h1>Logout</h1>
            <p class="sair">Tem certeza que deseja sair?</p>
            <button onClick={handleLogout}>Sim</button>
            <button class="secondary" onClick={handleLogoutN}>Não</button>
        </div>

    );
};
export default Logout;
