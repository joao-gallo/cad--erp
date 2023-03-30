import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function App() {
  const userUrl = "https://localhost:7143/api/User"

  const [data, setData] = useState([]);
  const rotaGet = async () => {
    await axios.get(userUrl).then(response => {
      setData(response.data);
    }).catch(error => {
      console.log(error);
    })
  }
  useEffect(() => {
    rotaGet();
  })

  return (
    <div>
      {data.map(user => (
        <span key={user.id}>
          <a>{user.id}</a>
          <br />
          <a>{user.name}</a>
          <br />
          <a>{user.email}</a>
          <br />
          <a>{user.adress}</a>
        </span>
      ))}
    </div>
  )
}

export default App;

