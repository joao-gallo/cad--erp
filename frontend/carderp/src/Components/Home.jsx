import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const emailInfo = localStorage.getItem('nome')
    return (
        <div className="home-main">
            <h1>Início</h1>
            <h3 className="greetings">Bem vindo, {emailInfo}! O que deseja fazer hoje?</h3>
            <a href=""></a>
            <h4 className="links-home">
                <Link to='/user' className="link">Informações de usuários</Link>
                <Link to='/update' className="link">Atualizar Cadastro</Link>
            </h4>
            <Link to='login' className="different">Login</Link>
        </div>
    )
}

export default Home