import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Registrar.css';

const Registrar = (props) => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    //   navigate("/login") //redireciona após registrar
    };


  return (
    <div className="Registrar" style={{
      color: 'black',
      background: 'white',
      borderRadius: '25px',
      boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
      padding: '25px 10px 25px 10px',
    }}>
    <Container>
      <div id="alignTextLeft">
          <h1 className="font">Registro</h1>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="form.nome">
            <Form.Control type="text" name="nome" placeholder="Nome" required /><br/>
        </Form.Group>
        <Form.Group controlId="form.email">
            <Form.Control type="email" name="email" placeholder="Email" required /><br/>
        </Form.Group>
        <Form.Group controlId="form.senha">
            <Form.Control type="password" name="senha" placeholder="Senha" required /><br/>
        </Form.Group>
        <Form.Group controlId="form.confirmarsenha">
            <Form.Control type="password" name="confirmarsenha" placeholder="Comfimar Senha" required /><br/>
        </Form.Group>
      <Button id="button" type="submit" size="lg">Registrar</Button><br/><br/>
      </Form>
      <Row>
        <Col>
          Já tem uma conta?<br/>
          <Button id="buttonTextBlue" onClick={() => navigate("/login")}>LOGIN</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Registrar;
