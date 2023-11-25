import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import Logout from './components/Logout';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
