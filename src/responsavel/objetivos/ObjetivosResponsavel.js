import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const ObjetivosResponsavel = (props) => {
  const navigate = useNavigate();
  const [objetivos, setObjetivos] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    getObjetivos();
  }, []);

  const getObjetivos = () => {
    axios({
      method: 'get',
      url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/goals?size=20&reached=false',
      headers: { 'Authorization': 'Bearer ' + props.token }
    }).then((response) => {
      setObjetivos(response.data.data);
    }).catch((error) => {
      toast.error(error.response.data.message);
      setObjetivos([]);
    });
  }

  const aprovarObjetivo = (idObjetivo) => {
    setSubmitted(true);

    api.patch(
      "/goals/" + idObjetivo + "/approve",
      '',
      {
        headers: {
        'Authorization': 'Bearer ' + props.token,
        'Content-Type': 'application/json'
        }
      }
    ).then((response) => {
      toast.success('Objetivo aprovado com sucesso!');
      setObjetivos([]);
      setSubmitted(false);
      getObjetivos();
    }).catch((error) => {
      setSubmitted(false);
      toast.error(error.response.data.message);
    });
  }


  return (
    <div className="ObjetivosResponsavel">
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
              <h3 className="font">Objetivos</h3>
          </div>
          <div style={{maxHeight: 650, overflow: 'auto'}}>
            {objetivos.map(
              (objetivo,i) => (
                <Card id="objetivo-{objetivo.id}" className="mb-4">
                  <Card.Header>
                    <Card.Title>{objetivo.name} - R${objetivo.cost},00</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {objetivo.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button id="button" disabled={submitted} onClick={() => aprovarObjetivo(objetivo.id)}>Aprovar</Button>
                  </Card.Footer>
                </Card>
              )
            )}
          </div>
        </Container>
        <Toaster />
      </div>
    </div>
  );
}

export default ObjetivosResponsavel;
