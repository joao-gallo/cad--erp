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
        <form className="form-signin">
            <section className="form-floating">
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)} required
                        placeholder="Id"
                    />
                    <label htmlFor="floatingInput">Id</label>
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nome" />
                    <label htmlFor="floatingInput">Nome</label>
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="CPF" />
                    <label htmlFor="floatingInput">CPF</label>
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                        placeholder="Endereço" />
                    <label htmlFor="floatingInput">Endereço</label>
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" />
                    <label htmlFor="floatingInput">Email</label>
                </section>
                <section className="form-floating">
                    <input
                        className="form-control"
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Telefone" />
                    <label htmlFor="floatingInput">Telefone</label>
                    <section className="botao">
                        <button onClick={updateUser} className="w-100 btn btn-lg btn-primary">Atualizar Usuário</button>
                    </section>
                </section>
            </section>
            <section><Link to='/'>Home</Link></section>
        </form>
    );
}
export default UpdtUser
