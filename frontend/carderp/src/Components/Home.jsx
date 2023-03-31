import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <fieldset><div>
            <h1>Início</h1>
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