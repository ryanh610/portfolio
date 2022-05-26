import React from "react";
import { Button, Card } from "react-bootstrap";

class AboutMe extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem",  }}>
        <Card.Img variant="top" src="headshot.jpg" className="img-fluid"  />
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
          During my university studies of Information and Technology, I found a passion for creating software. I am developing skills in JavaScript to fulfill my intrigue of creating and optimizing applications. I also enjoy meeting new people and learning about their lives and viewpoints.
          <br />
          <br />
          Raised in King of Prussia, PA. Upper Merion and Penn State alumni.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default AboutMe;
