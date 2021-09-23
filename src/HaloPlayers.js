import axios from 'axios';
import React from 'react';

const apiURL = process.env.REACT_APP_API_URL;


class HaloPlayers extends React.Component {



  componentDidMount() {
    this.fetchGamers();
  }

  async fetchGamers() {
    const response = await axios.get(`${apiURL}/haloPlayer`, {
      params: {
        id: 'd34730b9-bb48-4569-bcdf-afba9c358019'
      }

    })
    console.log('this is the halo player', response);
  }
  render() {

    return ('hi');
  }
}


console.log('these are the halo players', HaloPlayers);

export default HaloPlayers;