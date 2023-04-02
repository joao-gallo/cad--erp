import React, { useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`https://localhost:7143/api/User/${email}?password=${password}`, email, password);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('nome', nome);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={email} onChange={handleChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
