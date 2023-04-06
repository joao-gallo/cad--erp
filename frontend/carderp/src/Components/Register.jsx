import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("")
    const [adress, setAdress] = useState("");
    const [adress2, setAdress2] = useState("");
    const [email, setEmail] = useState("");
    const [emailValido, setEmailValido] = useState(true);
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValido, setPasswordValido] = useState("");

    const handleChange = async (event) => {
        setName(event.target.value);
        setCpf(event.target.value);
    }


    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validarSenha = (senha) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return regex.test(senha);
    };


    const handleEmailBlur = () => {
        setEmailValido(validarEmail(email));
    };

    const handleSenhaBlur = () => {
        setPasswordValido(validarSenha(password));
    };

    const handleRegister = async () => {
        const userData = {
            name: name,
            cpf: cpf,
            adress: adress,
            adress2: adress2,
            email: email,
            phone: phone,
            password: password,
        };
        await axios.post("https://localhost:7143/api/User", userData)
            .then(response => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            });
        useEffect(handleChange)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            className="form-signin"
            onSubmit={handleSubmit}>
            <fieldset className="form-floating">
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome"
                    />
                    <label htmlFor="floatingInput">Nome</label>
                    {name.length < 4 && name.length > 1 && (
                        <p className="validation">O nome deve ter no mínimo 4 caracteres.</p>
                    )}
                </section>
                <section className="form-floating">

                    <input
                        className="form-control"
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="CPF"
                    />
                    <label htmlFor="floatingInput">CPF</label>
                    {cpf.length < 11 && cpf.length > 1 && (
                        <p className="validation">CPF inválido</p>
                    )}
                </section>
                <section className="form-floating">

                    <input
                        className="form-control"
                        type="text"
                        id="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        placeholder="Endereço"
                    />
                    <label htmlFor="floatingInput">Endereço</label>
                    {adress.length < 5 && adress.length >= 1 && <p className="validation">Obrigatório</p>}
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="adress2"
                        value={adress2}
                        onChange={(e) => setAdress2(e.target.value)}
                        placeholder="Endereço 2"
                    />
                    <label htmlFor="floatingInput">Endereço 2</label>
                    {adress == adress2 && <p className="different">Os endereços precisam ser diferentes</p>}
                </section>
                <section className="form-floating">

                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                        placeholder="Email"
                    />
                    <label htmlFor="floatingInput">Email</label>
                    {!emailValido && email.length > 1 && <p className="validation">Por favor, informe um email válido.</p>}
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Telefone"
                    />
                    <label htmlFor="floatingInput">Telefone</label>
                    {phone.length < 11 && phone.length > 1 && <p className="validation">Telefone precisa de DDD</p>}
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handleSenhaBlur}
                        placeholder="Senha"
                    />
                    <label htmlFor="floatingInput">Senha</label>

                    {!passwordValido && password.length > 0 && (
                        <p className="validation">
                            A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial.
                        </p>
                    )}

                </section>
                <section className="register-btn-father">
                    <button
                        onClick={handleRegister}
                        className="register-btn"
                        disabled={
                            name.length < 4
                            || cpf.length < 11
                            || adress.length < 5
                            || adress == adress2
                            || !emailValido
                            || phone < 11
                            || !passwordValido
                        }
                    >
                        Criar Usuário
                    </button>
                </section>
            </fieldset>
            <Link to='/login'>Voltar</Link>
        </form >
    );
}

export default Register;
