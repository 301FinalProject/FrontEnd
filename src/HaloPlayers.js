import axios from 'axios';
import React from 'react';

const apiURL = process.env.REACT_APP_API_URL;


class HaloPlayers extends React.Component {
  
  
  
  componentDidUpdate() {
    if (!this.state.gamers)
    this.fetchGamers();
  }
  
  async fetchGamers() {
    const haloPlayer = await axios.get(`${apiURL}/haloPlayer`, {
      params: {

      }
      
    })
    console.log(haloPlayer);
    }
  }


  console.log(HaloPlayers);

export default HaloPlayers;