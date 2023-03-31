import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ShowUsers() {
    const userUrl = "https://localhost:7143/api/User";

    const [data, setData] = useState([]);

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
    }, []);

    return (
        <div>
            {data.map((user) => (
                <span key={user.id}>
                    <a>{user.id}</a>
                    <br />
                    <a>{user.name}</a>
                    <br />
                    <a>{user.cpf}</a>
                    <br />
                    <a>{user.adress}</a>
                    <br />
                    <a>{user.email}</a>
                    <br />
                    <a>{user.phone}</a>
                    <br />
                    <br />
                </span>
            ))}
            <br />
            <h3>
                <Link to='/'>Voltar</Link>
            </h3>
        </div>
    );
}

export default ShowUsers;
