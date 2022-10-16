import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Controle = (props) => {
  const navigate = useNavigate();
  const [saldo, setSaldo] = useState(0);


  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://mvp-impacta-lab.herokuapp.com/api/v1/accounts/' + props.userId,
      headers: { 'Authorization': 'Bearer ' + props.token }
    }).then((response) => {
      setSaldo(response.data.balance);
    }).catch((error) => {
      toast.error(error.message);
      setSaldo(0);
    });
  }, []);

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
        </Container>
        <Toaster />
      </div>
    </div>
  );
}

export default Controle;
