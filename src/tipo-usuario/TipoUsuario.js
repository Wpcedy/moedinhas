import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
// import SelecaoUsuario from './selecao-usuario.png';
import './TipoUsuario.css';

const TipoUsuario = (props) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // const formData = new FormData(event.target),
    // formDataObj = Object.fromEntries(formData.entries())
    setValidated(true);
  //   navigate("/login") //redireciona após registrar
  };

  return (
    <div className="TipoUsuario" style={{
      borderRadius: '25px',
      boxShadow: 'inset 0 0 1em #FDB35D, 0 0 1em #A25702',
      padding: '25px 10px 25px 10px',
    }}>
      <Container>
        {/* <img src={SelecaoUsuario} alt="selecao-usuario" /> */}
        <h1 className="font">Bem-vindo(a) nome</h1>
        <p>Selecione seu tipo de usuário:</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="form.email">
                <Form.Check required type='radio' label='Adulto - controle' name="tipo" id='tipo' value="adulto"></Form.Check>
                <Form.Check required type='radio' label='Infantil - aprendizado' name="tipo" id='tipo' value="infantil"></Form.Check>
            </Form.Group>
            <Form.Group controlId="form.email">
                <Form.Control type="email" name="email" placeholder="Insira o email do seu responsável/aprendiz" required /><br/>
            </Form.Group>
            <Button id="buttonWhite" type="submit">Get Started</Button>
        </Form>
      </Container>
    </div>
  );
}

export default TipoUsuario;
