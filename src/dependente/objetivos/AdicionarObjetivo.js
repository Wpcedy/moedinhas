import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdicionarObjetivo = (props) => {
  const navigate = useNavigate();

  return (
    <div className="AdicionarObjetivo">
      <div  style={{
        color: 'black',
        background: 'white',
        borderRadius: '25px',
        boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
        padding: '25px 10px 25px 10px',
      }}>
        <Container>
          <div id="alignTextLeft">
              <Button id="buttonTextBlue" onClick={() => navigate("/objetivos")}>VOLTAR</Button>
          </div>
          <div id="alignTextLeft">
              <h3 className="font">Adicionar Objetivo</h3>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AdicionarObjetivo;
