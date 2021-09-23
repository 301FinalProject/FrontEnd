import axios from 'axios';
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const apiURL = process.env.REACT_APP_API_URL;


class HaloPlayers extends React.Component {
    state  = { haloPlayers: [] };


  componentDidMount() {
    this.fetchGamers();
  }

  async fetchGamers() {
    const response = await axios.get(`${apiURL}/haloPlayer`, {
      params: {
        id: 'd34730b9-bb48-4569-bcdf-afba9c358019'
      }

    })
    console.log(response);
    this.setState({ haloPlayers:response.data })
    }
    render() {
      return(
        <>
        <h1>Halo Leaderboard</h1>
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
      )
      
    }
    
  }
  console.log(HaloPlayers);
  

export default HaloPlayers;