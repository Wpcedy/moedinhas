import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Logo from './Logo.png';
import './Home.css';

const Home = (props) => {
  return (
    <div className="Home">
      <Container>
        <img className="logo" src={Logo} alt="moedinhas" />
        <h1 className="font">Moedinhas</h1>
        <p>poupar é divertido</p>
        <Button id="button">Comece agora</Button>
      </Container>
    </div>
  );
}

export default Home;
