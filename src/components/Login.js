// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await api.get('https://gs2-js-json-server.vercel.app/dados');

            console.log('Dados recebidos:', response.data);

            const dados = response.data || [];

            let usuarioEncontrado = null;

            for (let i = 0; i < dados.length; i++) {
                const user = dados[i];

                if (user.email === email && user.senha === senha) {
                    usuarioEncontrado = user;
                    break;
                }
            }

            if (usuarioEncontrado) {
                console.log('Usuário encontrado:', usuarioEncontrado);

                sessionStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
                navigate('/main');
            } else {
                console.log('Nenhum usuário encontrado.');
                alert('Credenciais não encontradas. Verifique suas informações de login.');
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <label>Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Senha: </label>
            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
