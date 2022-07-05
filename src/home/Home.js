import React from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Home.css';

const Home = (props) => {
  return (
    <div className="Home">
      <Container>
        <img className="logo" src="" alt="moedinhas" />
        <h1>Moedinhas</h1>
        <p>poupar é divertido</p>
        <Button id="button">Comece agora</Button>
      </Container>
    </div>
  );
}

export default Home;
