import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import './Registrar.css';

const Registrar = (props) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    setSubmitted(true);
    const form = event.currentTarget;
    const formData = new FormData(event.target),

    formDataObj = Object.fromEntries(formData.entries())
    event.preventDefault();
    event.stopPropagation();

    if (formDataObj.senha != formDataObj.confirmarsenha) {
      setSubmitted(false);
      toast.error("Senhas diferentes, por favor verifique as senhas digitadas.")
    }

    if (form.checkValidity() === false) {
      setSubmitted(false);
      setValidated(true);
    } else {
      setValidated(true);

      api.post(
        "/users",
        JSON.stringify({
          birthday: "01/01/1001",
          email: formDataObj.email,
          name: formDataObj.nome,
          password: formDataObj.senha,
          user_type: formDataObj.tipo
        }),
        {
          headers: {
          'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        toast.success('Registro criado com sucesso!')
        setSubmitted(false);
        navigate("/login");
      }).catch((error) => {
        toast.error(error.message);
      });
    }
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
        <Form.Group controlId="form.tipo">
            <Form.Select name="tipo" required>
              <option value=''>Selecione o tipo de conta</option>
              <option value="RESPONSIBLE">Adulto - Controle</option>
              <option value="CHILDREN">Infantil - Aprendizado</option>
            </Form.Select><br/>
        </Form.Group>
      <Button id="button" type="submit" size="lg" disabled={submitted}>Registrar</Button><br/><br/>
      </Form>
      <Row>
        <Col>
          Já tem uma conta?<br/>
          <Button id="buttonTextBlue" onClick={() => navigate("/login")}>LOGIN</Button>
        </Col>
      </Row>
    </Container>
    <Toaster />
    </div>
  );
}

export default Registrar;
