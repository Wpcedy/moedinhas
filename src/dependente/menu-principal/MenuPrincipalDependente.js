import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userIcon from './user-icon.png';
import extratoIcon from './extrato.png';
import objetivosIcon from './objetivos.png';

const MenuPrincipalDependente = (props) => {
  const navigate = useNavigate();

  return (
    <div className="MenuPrincipalDependente">
      <div style={{
        color: 'white',
        background: '#FDAA49',
        borderRadius: '25px',
        boxShadow: 'inset 0 0 1em #FDB35D, 0 0 1em #A25702',
        padding: '25px 10px 25px 10px',
      }}>
        <Container>
          <div id="alignTextRight">
            <img
              src={userIcon}
              alt="user"
              width="35" height="38"
              onClick={() => navigate("/definir-dependente")}
            />
          </div>
          <div>
              <h3 className="font">Minhas moedinhas</h3>
              <h4>Saldo R$</h4>
          </div>
        </Container>
      </div><br />
      <div  style={{
        color: 'black',
        background: 'white',
        borderRadius: '25px',
        boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
        padding: '25px 10px 25px 10px',
      }}>
        <Container>
          <Row>
            <Col>
              <img
                src={extratoIcon}
                alt="user"
                onClick={() => navigate("/definir-dependente")}
              />
            </Col>
            <Col>
              <img
                src={objetivosIcon}
                alt="user"
                onClick={() => navigate("/definir-dependente")}
              />
            </Col>
          </Row>
        </Container>
      </div><br />
      <div  style={{
        color: 'black',
        background: 'white',
        borderRadius: '25px',
        boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
        padding: '25px 10px 25px 10px',
      }}>
        <Container>
          objetivos atuais
        </Container>
      </div>
    </div>
  );
}

export default MenuPrincipalDependente;
