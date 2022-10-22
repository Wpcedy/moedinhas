import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

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
import Saldo from './dependente/saldo/Saldo';

function App() {
  const [token, setToken] = useState(null);
  const [account, setAccount] = useState(null);
  const [dependente, setDependente] = useState(null);

  useEffect(() => {
    if (token !== null) {
      if (token.user_type === "RESPONSIBLE") {
        axios({
          method: 'get',
          url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/users/'+token.id+'/dependent',
          headers: { 'Authorization': 'Bearer ' + token.token }
        }).then((response) => {
          setAccount(response.data.account.id);
          setDependente(response.data.id);
        }).catch((error) => {
          setAccount(null);
          setDependente(null);
        });
      } else {
        axios({
          method: 'get',
          url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/accounts/'+token.id,
          headers: { 'Authorization': 'Bearer ' + token.token }
        }).then((response) => {
          setAccount(response.data.id);
        }).catch((error) => {
          setAccount(null);
        });
      }
    }
  }, [token]);

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
            <Route path="/menu-principal" element={<MenuPrincipalResponsavel token={token.token} setToken={setToken} accountId={account} />}  />
            <Route path="/definir-dependente" element={<DefinirDependente userId={token.id} token={token.token} />}  />
            <Route path="/extrato" element={<ExtratoResponsavel token={token.token} accountId={account} />}  />
            <Route path="/objetivos" element={<ObjetivosResponsavel token={token.token} />}  />
            <Route path="/controle-saldo" element={<Controle token={token.token} userId={dependente} accountId={account} />}  />
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
            <Route path="/menu-principal" element={<MenuPrincipalDependente token={token.token} setToken={setToken} />}  />
            <Route path="/definir-responsavel" element={<DefinirResponsavel userId={token.id}  token={token.token} />}  />
            <Route path="/extrato" element={<ExtratoDependente token={token.token} accountId={account} />}  />
            <Route path="/objetivos" element={<ObjetivosDependente token={token.token} />}  />
            <Route path="/adicionar-objetivo" element={<AdicionarObjetivoDependente userId={token.id} token={token.token} />}  />
            <Route path="/saldo" element={<Saldo token={token.token} userId={token.id} />}  />
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
