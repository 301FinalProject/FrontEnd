import axios from 'axios';
import React from 'react';

const apiURL = process.env.REACT_APP_API_URL;


class HaloPlayers extends React.Component {
  
  
  
  componentDidUpdate() {
    if (!this.state.gamers)
    this.fetchGamers();
  }
  
  async fetchGamers() {
    const haloPlayers = await axios.get(`${apiURL}/haloPlayer`, {
      params: {
        
      }
      
    })
    console.log(haloPlayers);
    }
    render() {
      return(
        <>
        {this.state.haloPlayers &&
        <ul>
        {this.state.haloPlayers.map(
          (haloPlayer, index) => (
            <li key={index}>
                {haloPlayer}
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