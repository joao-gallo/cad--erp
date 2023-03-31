import axios from "axios";
import React, { useState } from "react";
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

    const handleChange = async (event) => {
        setName(event.target.value);
        setCpf(event.target.value);
    }


    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };


    const handleEmailBlur = () => {
        setEmailValido(validarEmail(email));
    };

    const handleRegister = async () => {
        const userData = {
            name: name,
            cpf: cpf,
            adress: adress,
            adress2: adress2,
            email: email,
            phone: phone,
        };
        await axios.post("https://localhost:7143/api/User", userData)
            .then(response => {
                navigate('/user');
            })
            .catch(error => {
                console.log(error);
            });

    };

    return (
        <form>
            <fieldset>
                <fieldset className="information">
                    <section>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name" value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {name.length < 4 && name.length > 1 && (
                            <p className="validation">O nome deve ter no mínimo 4 caracteres.</p>
                        )}
                    </section>
                    <section>
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                        {cpf.length < 11 && cpf.length > 1 && (
                            <p className="validation">CPF inválido</p>
                        )}
                    </section>
                </fieldset>
                <fieldset className="adress">
                    <label htmlFor="adress">Endereço:</label>
                    <input
                        type="text"
                        id="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                    {adress.length < 5 && adress.length >= 1 && <p className="validation">Obrigatório</p>}
                    <label htmlFor="adress">Endereço 2 (Opcional):</label>
                    <input
                        type="text"
                        id="adress"
                        value={adress2}
                        onChange={(e) => setAdress2(e.target.value)}
                    />
                    {adress == adress2 && <p>Os endereços precisam ser diferentes</p>}
                </fieldset>
                <fieldset className="contact">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                    />
                    {!emailValido && email.length > 1 && <p className="validation">Por favor, informe um email válido.</p>}
                    <label htmlFor="phone">Telefone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {phone.length < 11 && phone.length > 1 && <p className="validation">Telefone precisa de DDD</p>}
                    <button onClick={handleRegister} disabled={
                        name.length < 4
                        || cpf.length < 11
                        || adress.length < 5
                        || adress == adress2
                        || !emailValido
                        || phone < 11
                    }>Criar Usuário</button>
                </fieldset>
            </fieldset>
            <Link to="/user">Usuários</Link>
        </form>
    );
}

export default Register;
