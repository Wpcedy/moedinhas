import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DefinirResponsavel = (props) => {
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
    <div className="DefinirResponsavel" style={{
      color: 'black',
      background: 'white',
      borderRadius: '25px',
      boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
      padding: '25px 10px 25px 10px',
    }}>
      <Container>
        <div id="alignTextLeft">
            <Button id="buttonTextBlue" onClick={() => navigate("/menu-principal")}>VOLTAR</Button>
        </div>
        <div id="alignTextLeft">
            <h1 className="font">Definir<br/> Responsável</h1>
            <p>Por favor insira o <b>email</b> do responsável</p>
        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="form.email">
              <Form.Control type="email" name="email" placeholder="Email" required /><br/>
          </Form.Group>
        <Button id="button" type="submit" size="lg">Definir</Button><br/><br/>
        </Form>
      </Container>
    </div>
  );
}

export default DefinirResponsavel;
