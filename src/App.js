import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
import Loader from "react-loader-spinner";
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
          </Route>
        </Switch>
      </Router>
    </>
  );
}
};
export default withAuth0(App);
