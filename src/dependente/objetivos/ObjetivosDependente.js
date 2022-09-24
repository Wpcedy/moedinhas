import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ObjetivosDependente = (props) => {
  const navigate = useNavigate();

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
          <Card>
            <Card.Header>
              <Card.Title>Card Title</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button id="button">Aprovar</Button>
            </Card.Footer>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default ObjetivosDependente;
