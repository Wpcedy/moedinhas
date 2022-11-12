import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import api from "../services/api";
import './Login.css';

const Login = (props) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    setSubmitted(true);
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setSubmitted(false);
      setValidated(true);
    } else {
      const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries())

      setValidated(true);

      api.post(
        "/auth",
        JSON.stringify({
          email: formDataObj.email,
          password: formDataObj.senha
        }),
        {
          headers: {
          'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        props.setToken(response.data);
        setSubmitted(false);
        navigate("/menu-principal");
      }).catch((error) => {
        console.log(error.response.data.message);
        setSubmitted(false);
        toast.error(error.response.data.message);
      });
    }

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
          <Button id="button" type="submit" size="lg" disabled={submitted}>Log In</Button><br/><br/>
        </Form>
        <Row>
          <Col>
            Não tem uma conta?<br/>
            <Button id="buttonTextBlue" onClick={() => navigate("/registrar")}>REGISTRE-SE</Button>
          </Col>
          {/* <Col>
            Esqueceu sua senha?<br/>
            <Button id="buttonTextBlue" onClick={() => navigate("/recuperar-senha")}>RECUPERAR SENHA</Button>
          </Col> */}
        </Row>
      </Container>
      <Toaster />
    </div>
  );
}

export default Login;
