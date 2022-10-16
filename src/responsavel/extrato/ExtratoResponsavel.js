import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ExtratoResponsavel = (props) => {
  const navigate = useNavigate();
  const [movimentos, setMovimentos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/transactions/'+props.accountId+'?size=20&reached=false',
      headers: { 'Authorization': 'Bearer ' + props.token }
    }).then((response) => {
      setMovimentos(response.data.data);
    }).catch((error) => {
      toast.error(error.message);
      setMovimentos([]);
    });
  }, []);


// 1 - entrada
// 2 - saida
  return (
    <div className="ExtratoResponsavel">
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
              <h3 className="font">Movimentos<br/> Recentes</h3>
          </div>
          <div style={{maxHeight: 650, overflow: 'auto'}}>
            {movimentos.map(
              (movimento,i) => (
                <Card id="movimento-{movimento.id}" className="mb-4">
                  <Card.Header>
                    <Card.Title>Dia {movimento.created_at}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      R${movimento.amount},00
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
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

export default ExtratoResponsavel;
