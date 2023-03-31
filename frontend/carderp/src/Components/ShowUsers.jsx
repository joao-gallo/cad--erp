import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowUsers() {
    const userUrl = "https://localhost:7143/api/User";

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchData() {
        setIsLoading(true);

        try {
            const response = await fetch(userUrl);
            const data = await response.json();

            // restante do código para processar os dados da API
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const rotaGet = async () => {
        try {
            const response = await axios.get(userUrl);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        rotaGet();
        fetchData();
    }, []);

    return (
        <div className="user">
            {isLoading ? <h2>Carregando...</h2> : null}
            {<div>
                {data.map((user) => (
                    <fieldset>
                        <h3>{user.name}</h3>
                        <ul key={user.id}>
                            <li>Id: {user.id}</li>
                            <li>CPF: {user.cpf}</li>
                            <li>Endereço: {user.adress}</li>
                            <li>Endereço 2: {user.adress2}</li>
                            <li>Email: {user.email}</li>
                            <li>Telefone: {user.phone}</li>
                        </ul></fieldset>
                ))}
                <h3>
                </h3>
            </div>}
            <Link to='/'>Início</Link>
        </div>
    );
}

export default ShowUsers;
