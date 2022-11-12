import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const Controle = (props) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [saldo, setSaldo] = useState(0);


  useEffect(() => {
    atualizaSaldo()
  }, []);

  const atualizaSaldo = () => {
    axios({
      method: 'get',
      url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/accounts/' + props.userId,
      headers: { 'Authorization': 'Bearer ' + props.token }
    }).then((response) => {
      setSaldo(response.data.balance);
    }).catch((error) => {
      toast.error(error.response.data.message);
      setSaldo(0);
    });
  }

  const handleSubmit = (event) => {
    setSubmitted(true);
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setSubmitted(false);
      setValidated(true);
    } else {
      var url = "/accounts/{accountId}";
      const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries())
      url = url.replace('{accountId}', props.accountId);

      setValidated(true);

      api.put(
        url,
        JSON.stringify({
          amount: formDataObj.valor
        }),
        {
          headers: {
            'Authorization': 'Bearer ' + props.token,
            'Content-Type': 'application/json'
          }
        }
      ).then((response) => {
        setSaldo(0);
        atualizaSaldo()
        toast.success('Saldo adicionado com sucesso!');
        setSubmitted(false);
        event.target.reset();
      }).catch((error) => {
        setSubmitted(false);
        toast.error(error.response.data.message);
      });
    }
  };

  return (
    <div className="Controle">
      <div  style={{
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
              <h3 className="font">Controle de Saldo</h3>
              <h4>Saldo atual: R$ {saldo},00</h4><br />
          </div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="form.valor">
                <InputGroup>
                  <InputGroup.Text>R$</InputGroup.Text>
                  <Form.Control type="number" name="valor" placeholder="Valor" required />
                  <InputGroup.Text>,00</InputGroup.Text>
                </InputGroup><br/>
            </Form.Group>
          <Button id="button" type="submit" size="lg" disabled={submitted}>Adicionar Saldo</Button><br/><br/>
          </Form>
        </Container>
        <Toaster />
      </div>
    </div>
  );
}

export default Controle;
