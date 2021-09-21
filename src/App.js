import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {



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
          {auth0.isLoading
          ? <p>spinner</p>
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
            <h1>Home</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
};
export default withAuth0(App);
