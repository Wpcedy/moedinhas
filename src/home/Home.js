import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Logo from './Logo.png';
import './Home.css';

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div className="Home" style={{
      borderRadius: '25px',
      boxShadow: 'inset 0 0 1em #FDB35D, 0 0 1em #A25702',
      padding: '25px 10px 25px 10px',
    }}>
      <Container>
        <img className="logo" src={Logo} alt="moedinhas" />
        <h1 className="font">Moedinhas</h1>
        <p>poupar é divertido</p>
        <Button id="button" onClick={() => navigate("/apresentacao")}>Comece agora</Button>
      </Container>
    </div>
  );
}

export default Home;
