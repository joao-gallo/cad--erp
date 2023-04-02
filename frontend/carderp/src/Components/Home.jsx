import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const emailInfo = localStorage.getItem('nome')
    return (
        <fieldset><div>
            <h1>Início</h1>
            <h3>Bem vindo, {emailInfo}! O que deseja fazer hoje?</h3>
            <a href=""></a>
            <fieldset><h3>
                <fieldset><Link to='/user'>Informações de usuários</Link></fieldset>
                <fieldset><Link to='/update'>Atualizar Cadastro</Link></fieldset>
                <fieldset><Link to='/Register'>Registrar</Link></fieldset>
            </h3></fieldset>
        </div></fieldset>
    )
}

export default Home