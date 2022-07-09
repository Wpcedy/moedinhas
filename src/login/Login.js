import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = (props) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    //   navigate("/") //redireciona após registrar
  };

  return (
    <div className="Login" style={{
      color: 'black',
      background: 'white',
      borderRadius: '25px',
      boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
      padding: '25px 10px 25px 10px',
    }}>
      <Container>
        <div id="alignTextLeft">
            <h1 className="font">Log In</h1>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="form.email">
              <Form.Control type="email" name="email" placeholder="Email" required /><br/>
          </Form.Group>
          <Form.Group controlId="form.senha">
              <Form.Control type="password" name="senha" placeholder="Senha" required />
          </Form.Group><br/>
          <Button id="button" type="submit" size="lg">Log In</Button><br/><br/>
        </Form>
        <Row>
          <Col>
            Não tem uma conta?<br/>
            <Button id="buttonTextBlue" onClick={() => navigate("/registrar")}>REGISTRE-SE</Button>
          </Col>
          <Col>
            Esqueceu sua senha?<br/>
            <Button id="buttonTextBlue" onClick={() => navigate("/recuperar-senha")}>RECUPERAR SENHA</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
