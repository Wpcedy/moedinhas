import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const AdicionarObjetivo = (props) => {
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

    if (form.checkValidity() === false) {
      setSubmitted(false);
      setValidated(true);
    } else {
      setValidated(true);

      api.post(
        "/goals",
        JSON.stringify({
          name: formDataObj.nome,
          cost: formDataObj.custo,
          description: formDataObj.descricao,
          user_id: props.userId
        }),
        {
          headers: {
          'Authorization': 'Bearer ' + props.token,
          'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        toast.success('Objetivo criado com sucesso!');
        setSubmitted(false);
        event.target.reset();
      }).catch((error) => {
        setSubmitted(false);
        toast.error(error.message);
      });
    }
  };

  return (
    <div className="AdicionarObjetivo">
      <div  style={{
        color: 'black',
        background: 'white',
        borderRadius: '25px',
        boxShadow: 'inset 0 0 1em #FEE2C2, 0 0 1em #A25702',
        padding: '25px 10px 25px 10px',
      }}>
        <Container>
          <div id="alignTextLeft">
              <Button id="buttonTextBlue" onClick={() => navigate("/objetivos")}>VOLTAR</Button>
          </div>
          <div id="alignTextLeft">
              <h3 className="font">Adicionar<br />Objetivo</h3>
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="form.nome">
                <Form.Control type="text" name="nome" placeholder="Nome do Objetivo" required /><br/>
            </Form.Group>
            <Form.Group controlId="form.custo">
                <InputGroup>
                  <InputGroup.Text>R$</InputGroup.Text>
                  <Form.Control type="number" name="custo" placeholder="Custo Estimado" required />
                  <InputGroup.Text>,00</InputGroup.Text>
                </InputGroup><br/>
            </Form.Group>
            <Form.Group controlId="form.descricao">
                <Form.Control as="textarea" rows={3} maxLength={255} name="descricao" placeholder="Descrição" required /><br/>
            </Form.Group>
          <Button id="button" type="submit" size="lg" disabled={submitted}>Adicionar</Button><br/><br/>
          </Form>
        </Container>
        <Toaster />
      </div>
    </div>
  );
}

export default AdicionarObjetivo;
