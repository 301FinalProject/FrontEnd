import axios from 'axios';
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';


const apiURL = process.env.REACT_APP_API_URL;

class SavePlayers extends React.Component {
state = {
  haloPlayers: []
};

componentDidMount() {
  this.fetchGamers();
}
async fetchGamers() {
  
  try {
    const response = await axios.get(`${apiURL}/haloSavedPlayer`);
    console.log('this is response', response);
    this.setState({ haloPlayers:response.data })
  }
  catch (err) {
    console.log(err);
  }
}

  render() {
    return(
      <>
      <h1>Your Saved Players</h1>
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