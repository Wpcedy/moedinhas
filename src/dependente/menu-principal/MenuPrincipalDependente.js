import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userIcon from './user-icon.png';
import extratoIcon from './extrato.png';
import objetivosIcon from './objetivos.png';
import controleIcon from './controle.png';
import logoutIcon from './logout.png';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const MenuPrincipalDependente = (props) => {
  const navigate = useNavigate();
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/goals?size=3&reached=false',
      headers: { 'Authorization': 'Bearer ' + props.token }
    }).then((response) => {
      setObjetivos(response.data.data);
    }).catch((error) => {
      toast.error(error.message);
      setObjetivos([]);
    });
  }, []);

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
          <Row>
            <Col>
              <div id="alignTextLeft">
                <img
                  src={logoutIcon}
                  alt="user"
                  width="35" height="38"
                  onClick={() => {
                    props.setToken(null);
                    navigate("/");
                  }}
                />
              </div>
            </Col>
            <Col>
              <div id="alignTextRight">
                <img
                  src={userIcon}
                  alt="user"
                  width="35" height="38"
                  onClick={() => navigate("/definir-responsavel")}
                />
              </div>
            </Col>
          </Row>
          <div>
              <h3 className="font">Minhas moedinhas</h3>
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
                onClick={() => navigate("/extrato")}
              />
            </Col>
            <Col>
              <img
                src={objetivosIcon}
                alt="user"
                onClick={() => navigate("/objetivos")}
              />
            </Col>
            <Col>
              <img
                src={controleIcon}
                alt="user"
                onClick={() => navigate("/saldo")}
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
          <div style={{maxHeight: 300, overflow: 'auto'}}>
            {objetivos.map(
              (objetivo,i) => (
                <Card id="objetivo-{objetivo.id}" className="mb-4">
                  <Card.Header>
                    <Card.Title>{objetivo.name} - R${objetivo.cost},00</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {objetivo.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  </Card.Footer>
                </Card>
              )
            )}
          </div>
        </Container>
        <Toaster />
      </div>
    </div>
  );
}

export default MenuPrincipalDependente;
