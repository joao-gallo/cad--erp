import axios from "axios";
import React, { useState } from "react";

function Register() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("")
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("")

    const register = async () => {
        const userData = {
            name: name,
            cpf: cpf,
            adress: adress,
            email: email,
            phone: phone,
        };
        await axios.post("https://localhost:7143/api/User", userData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <label htmlFor="adress">Endereço:</label>
            <input type="text" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="phone">Telefone:</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button onClick={register}>Criar Usuário</button>
        </div>
    );
}

export default Register;
