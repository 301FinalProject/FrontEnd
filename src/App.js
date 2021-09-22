import './App.css';
import LoginButton from './LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton'
import Loader from "react-loader-spinner";
import React from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import yvette from './images/yvette.jpeg';
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



componentDidUpdate() {
  if (!this.state.gamers)
  this.fetchGamers();
}

async fetchGamers() {
  const { auth0 } = this.props;
  if (!auth0.isAuthenticated) {
    return;
  }
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
            <CardColumns>
              <Card style={{ width: '300px' }} >
                <Card.Img variant="top" width="300px" src={yvette} alt="yvette" />
                <Card.Body>
                  <Card.Title>Yvette</Card.Title>
                    <Card.Text>Hi, I’m Yvette Clapp.  I have a MBA in Finance and over 15 years of management experience and over 20 years of leadership experience. I recently completed courses in Data Analysis and Project Management.  I am currently attending DeltaV Coding School and am planning on completing all of the courses.
                    I have proven experience of leading teams through process changes successfully.  Many changes I have been involved in improved the SLAs of the department significantly.  Process efficiency is a passion for me.  This passion has generated many process changes that greatly reduces human error and an increase in SLA results.
                    My goal is to continually improve myself and most recently to reinvent myself into a career in website coding where I can utilize my passions to the benefit of the customer.
                    </Card.Text>
                  <Card.Link href="https://www.yahoo.com/ymclapp">My Email</Card.Link>
                </Card.Body>
              </Card> 

              <Card style={{ width: '300px' }} >
                <Card.Img variant="top" width="300px" src={yvette} alt="yvette" />
                <Card.Body>
                  <Card.Title>Yvette</Card.Title>
                    <Card.Text>Hi, I’m Yvette Clapp.  I have a MBA in Finance and over 15 years of management experience and over 20 years of leadership experience. I recently completed courses in Data Analysis and Project Management.  I am currently attending DeltaV Coding School and am planning on completing all of the courses.
                    I have proven experience of leading teams through process changes successfully.  Many changes I have been involved in improved the SLAs of the department significantly.  Process efficiency is a passion for me.  This passion has generated many process changes that greatly reduces human error and an increase in SLA results.
                    My goal is to continually improve myself and most recently to reinvent myself into a career in website coding where I can utilize my passions to the benefit of the customer.
                    </Card.Text>
                  <Card.Link href="https://www.yahoo.com/ymclapp">My Email</Card.Link>
                </Card.Body>
              </Card>
            </CardColumns>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
};
export default withAuth0(App);
