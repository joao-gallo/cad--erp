import React from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import ShowUsers from "./Components/ShowUsers";
import Home from "./Components/Home";
import UpdtUser from "./Components/UpdtUser";
import Register from "./Components/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/user" Component={ShowUsers} />
        <Route exact path="register" Component={Register} />
        <Route exact path="/update" Component={UpdtUser} />
      </Routes>
    </Router>
  );
}

export default App;
