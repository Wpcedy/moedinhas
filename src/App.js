import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './home/Home';
import Apresentacao from './apresentacao/Apresentacao';
import Login from './login/Login';
import Registrar from './registrar/Registrar';
import RecuperarSenha from './recuperar-senha/RecuperarSenha';

import MenuPrincipalResponsavel from './responsavel/menu-principal/MenuPrincipalResponsavel';
import DefinirDependente from './responsavel/definir-dependente/DefinirDependente';

import MenuPrincipalDependente from './dependente/menu-principal/MenuPrincipalDependente';
import DefinirResponsavel from './dependente/definir-responsavel/DefinirResponsavel';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return (
      <div className="App text-center vh-100" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
        background: '#FDAA49',
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/apresentacao" element={<Apresentacao />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          </Routes>
        </Router>
      </div>
    );
  }

  return (
    <div className="App text-center vh-100" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: 'white',
      background: '#FDAA49',
    }}>
      <Router>
        <Routes>
          <Route path="/menu-principal" element={<MenuPrincipalResponsavel />}  />
          <Route path="/definir-dependente" element={<DefinirDependente />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
