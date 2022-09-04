import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Home from './home/Home';
import Apresentacao from './apresentacao/Apresentacao';
import Login from './login/Login';
import Registrar from './registrar/Registrar';
import RecuperarSenha from './recuperar-senha/RecuperarSenha';

import MenuPrincipalResponsavel from './responsavel/menu-principal/MenuPrincipalResponsavel';
import DefinirResponsavel from './responsavel/definir-dependente/DefinirDependente';
import ExtratoResponsavel from './responsavel/extrato/ExtratoResponsavel';
import ObjetivosResponsavel from './responsavel/objetivos/ObjetivosResponsavel';
import Controle from './responsavel/controle/Controle';

import MenuPrincipalDependente from './dependente/menu-principal/MenuPrincipalDependente';
import DefinirDependente from './dependente/definir-responsavel/DefinirResponsavel';
import ExtratoDependente from './dependente/extrato/ExtratoDependente';
import ObjetivosDependente from './dependente/objetivos/ObjetivosDependente';

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
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
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
          <Route path="/definir-dependente" element={<DefinirResponsavel />}  />
          <Route path="/extrato" element={<ExtratoResponsavel />}  />
          <Route path="/objetivos" element={<ObjetivosResponsavel />}  />
          {/* <Route path="/controle-saldo" element={<Controle />}  /> */}
          <Route
            path="*"
            element={<Navigate to="/menu-principal" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
