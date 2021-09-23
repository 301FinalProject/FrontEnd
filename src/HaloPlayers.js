import axios from 'axios';
import React from 'react';

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
        {this.state.haloPlayers &&
        <ul>
        {this.state.haloPlayers.map(
          (haloPlayer, index) => (
            <li key={index}>
                {haloPlayer.playerName}
            </li>
          )
        )}
        </ul>
     
      }
      </>
      )
      
    }
    
  }
  console.log(HaloPlayers);
  

export default HaloPlayers;