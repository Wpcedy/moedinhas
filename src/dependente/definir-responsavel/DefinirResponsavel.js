import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const DefinirResponsavel = (props) => {
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
      var url = "/users/{userId}/responsible";
      const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries())
      url = url.replace('{userId}', props.userId);

      setValidated(true);

      api.patch(
        url,
        JSON.stringify({
          responsible_email: formDataObj.email
        }),
        {
          headers: {
            'Authorization': 'Bearer ' + props.token,
            'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        toast.success('Responsável definido com sucesso!')
        setSubmitted(false);
        event.target.reset();
      }).catch((error) => {
        setSubmitted(false);
        toast.error(error.response.data.message);
      });
    }
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
        <Button id="button" type="submit" size="lg" disabled={submitted}>Definir</Button><br/><br/>
        </Form>
      </Container>
      <Toaster />
    </div>
  );
}

export default DefinirResponsavel;
