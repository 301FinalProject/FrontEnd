import axios from 'axios';
import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';


const apiURL = process.env.REACT_APP_API_URL;

class SavePlayers extends React.Component {
state = {
  haloPlayers: [
    {playerName:'Jaren', playerRank:'1'},
    {playerName:'Joey', playerRank:'-1'},
    {playerName:'Yvette', playerRank:'1'}
  ]
};
  render() {
    return(
      <>
      {this.state.haloPlayers &&
      <Container className="playerCards">
      <Row>
      {this.state.haloPlayers.map(
        (haloPlayer, index) => (
      <Col key={index}>
      <Card style={{ width: '300px' }} >
      <Card.Body>
      <Card.Title>{haloPlayer.playerName}</Card.Title>
      <Card.Text>Rank #{haloPlayer.playerRank}</Card.Text>
      </Card.Body>
      </Card>
      </Col>
        )
      )}
      </Row>
    </Container>
    }
    </>
    );
  }
}

export default SavePlayers;