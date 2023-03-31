import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function UpdtUser() {

    const [id, setId] = useState("")
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    const updateUser = async () => {
        const userData = {
            id: id,
            cpf: cpf,
            name: name,
            email: email,
            adress: adress,
            phone: phone,
        };
        await axios.put(`https://localhost:7143/api/User/${id}`, userData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <main>
            <fieldset>
                <fieldset>
                    <label>Id:</label>
                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="cpf">CPF:</label>
                    <input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    <label htmlFor="adress">Endereço:</label>
                    <input type="text" id="adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="phone">Telefone:</label>
                    <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button onClick={updateUser}>Atualizar Usuário</button>
                </fieldset>
            </fieldset>
            <fieldset><Link to='/'>Home</Link></fieldset>
        </main>
    );
}
export default UpdtUser
