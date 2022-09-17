import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Home from './home/Home';
import Apresentacao from './apresentacao/Apresentacao';
import Login from './login/Login';
import Registrar from './registrar/Registrar';
import RecuperarSenha from './recuperar-senha/RecuperarSenha';

import MenuPrincipalResponsavel from './responsavel/menu-principal/MenuPrincipalResponsavel';
import DefinirDependente from './responsavel/definir-dependente/DefinirDependente';
import ExtratoResponsavel from './responsavel/extrato/ExtratoResponsavel';
import ObjetivosResponsavel from './responsavel/objetivos/ObjetivosResponsavel';
import Controle from './responsavel/controle/Controle';

import MenuPrincipalDependente from './dependente/menu-principal/MenuPrincipalDependente';
import DefinirResponsavel from './dependente/definir-responsavel/DefinirResponsavel';
import ExtratoDependente from './dependente/extrato/ExtratoDependente';
import ObjetivosDependente from './dependente/objetivos/ObjetivosDependente';
import AdicionarObjetivoDependente from './dependente/objetivos/AdicionarObjetivo';

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
  } else if (token.user_type === "RESPONSIBLE") {
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
            <Route path="/menu-principal" element={<MenuPrincipalResponsavel setToken={setToken} />}  />
            <Route path="/definir-dependente" element={<DefinirDependente userId={token.id} token={token.token} />}  />
            <Route path="/extrato" element={<ExtratoResponsavel />}  />
            <Route path="/objetivos" element={<ObjetivosResponsavel />}  />
            <Route path="/controle-saldo" element={<Controle />}  />
            <Route
              path="*"
              element={<Navigate to="/menu-principal" />}
            />
          </Routes>
        </Router>
      </div>
    );
  } else {
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
            <Route path="/menu-principal" element={<MenuPrincipalDependente setToken={setToken} />}  />
            <Route path="/definir-responsavel" element={<DefinirResponsavel userId={token.id}  token={token.token} />}  />
            <Route path="/extrato" element={<ExtratoDependente />}  />
            <Route path="/objetivos" element={<ObjetivosDependente />}  />
            <Route path="/adicionar-objetivo" element={<AdicionarObjetivoDependente />}  />
            <Route
              path="*"
              element={<Navigate to="/menu-principal" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;
