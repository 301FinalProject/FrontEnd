import React from 'react';
import {Card, CardColumns} from 'react-bootstrap';
import yvette from './images/yvette.jpeg';

class AboutUs extends React.Component {
  render() {

    return(
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
  </CardColumns> );
  }
}
export default AboutUs;