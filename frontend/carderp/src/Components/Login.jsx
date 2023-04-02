import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <h1 className="fw-normal">Login</h1>
                <div className="form-floating">
                    <input
                        type="text"
                        name="nome"
                        className="form-control" value={nome}
                        onChange={(e) => setNome(e.target.value)} required
                        placeholder='Nome' />
                    <label for="floatingInput">Nome</label>
                </div>
                <div className="form-floating">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={handleChange} required
                        placeholder='Email' />
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={password}
                        onChange={handleChange} required
                        placeholder='Senha' />
                    <label for="floatingInput">Senha</label>
                </div>
                <button type="submit" className="w-100 btn btn-lg btn-primary">Login</button>
            </form>
            <h4 className='pulo'>
                <Link to='/Register' className="w-100 btn btn-lg btn-primary">Cadastre-se</Link>
            </h4>
        </main >
    );
}

export default Login;
