import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Apresentacao.css';
import Apresentacao1 from './apresentacao_1.png';
import Apresentacao2 from './apresentacao_2.png';
import Apresentacao3 from './apresentacao_3.png';

const Apresentacao = (props) => {
  const navigate = useNavigate();
  const [layoutAtivo, setLayoutAtivo] = useState('apresentacao1');

  return (
    <div className="Apresentacao" style={{
      color: 'black',
      background: 'white',
      borderRadius: '25px',
      boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
      padding: '25px 10px 25px 10px',
    }}>
      <Container>
        <div id="alignButton">
          <Button id="buttonWhite" onClick={() => navigate("/login")}>PULAR</Button><br/><br/>
        </div>
        <div hidden={'apresentacao1' != layoutAtivo}>
          <img src={Apresentacao1} alt="apresentacao1" />
          <h1 className="font">Educar</h1>
          <p>A eduacação financeira para crianças<br/> é importante para a formação dos pequenos</p><br/>
          <Button id="button" onClick={() => setLayoutAtivo('apresentacao2')}>PRÓXIMO</Button>
        </div>
        <div hidden={'apresentacao2' != layoutAtivo}>
          <img src={Apresentacao2} alt="apresentacao2" />
          <h1 className="font">Divertir</h1>
          <p>Com uma linguagem simples e acessível<br/> sua criança vai aprender controle<br/> financeiro brincando</p><br/>
          <div>
            <Button id="button" onClick={() => setLayoutAtivo('apresentacao1')}>ANTERIOR</Button>&nbsp;&nbsp;&nbsp;
            <Button id="button" onClick={() => setLayoutAtivo('apresentacao3')}>PRÓXIMO</Button>
          </div>
        </div>
        <div hidden={'apresentacao3' != layoutAtivo}>
          <img src={Apresentacao3} alt="apresentacao3" />
          <h1 className="font">Valorizar</h1>
          <p>Vai compreender qual é o real valor<br/> do dinheiro com dinâmicas de metas,<br/> prioridade, esforço e recompensa</p><br/>
          <div>
            <Button id="button" onClick={() => setLayoutAtivo('apresentacao2')}>ANTERIOR</Button>&nbsp;&nbsp;&nbsp;
            <Button id="button" onClick={() => navigate("/login")}>PRÓXIMO</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Apresentacao;
