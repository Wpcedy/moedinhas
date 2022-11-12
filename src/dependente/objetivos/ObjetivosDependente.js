import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ObjetivosDependente = (props) => {
  const navigate = useNavigate();
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/goals?size=20&reached=false',
      headers: { 'Authorization': 'Bearer ' + props.token }
    }).then((response) => {
      setObjetivos(response.data.data);
    }).catch((error) => {
      toast.error(error.response.data.message);
      setObjetivos([]);
    });
  }, []);

  return (
    <div className="ObjetivosDependente">
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
              <Button id="buttonTextBlue" onClick={() => navigate("/menu-principal")}>VOLTAR</Button>
            </Col>
            <Col>
              <Button id="buttonTextBlue" onClick={() => navigate("/adicionar-objetivo")}>ADICIONAR</Button>
            </Col>
          </Row>
          <div id="alignTextLeft">
              <h3 className="font">Objetivos</h3>
          </div>
          <div style={{maxHeight: 650, overflow: 'auto'}}>
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

export default ObjetivosDependente;
