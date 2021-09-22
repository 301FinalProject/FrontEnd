import './App.css';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
import Loader from "react-loader-spinner";
import React from 'react';
import AboutUs from './AboutUs';
import HaloPlayers from './HaloPlayers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import QuoteAndAuthor from './QuoteAndAuthor'
import quotes from './QuoteDB'

class App extends React.Component {
  state = {
    gamers: null,
    quote: quotes[0].quote,
    author: quotes[0].author,
  };

generateRandomQuote = (arr) => {
  let num = Math.floor(Math.random() * quotes.length)

  let newQuote = quotes[num];

  this.setState({
    quote: newQuote.quote,
    author: newQuote.author
  })

  this.shuffleQuotes(quotes)

}

shuffleQuotes = (arr) => {
  return arr.sort(function () { return 0.5 - Math.random() });
}






render() {
  
  const { auth0 } = this.props;
  console.log('auth0 in App', auth0);

  return (
    <>
      <Router>
        <nav>
          <h1>Game Hive</h1>
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/haloPlayers">Halo</Link>
          {auth0.isLoading
          ? <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={25}
          width={25}
          // timeout={3000} //3 secs
        />
          : auth0.isAuthenticated
           ? (
             <>
              Welcome Back, {auth0.user.name}
              <LogoutButton />
             </>
           )
           : <LoginButton />
           }
        </nav>
        <Switch>
          <Route exact path="/">
            <h2>Home</h2>
            <div className="container">
        <h1 className="text-center">Random Quote</h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
          </Route>
          <Route path="/aboutUs">
            <AboutUs/>
          </Route>
          <Route path="/haloPlayers">
            <HaloPlayers />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
};
export default withAuth0(App);
