import React from "react";
import { Button, Card } from "react-bootstrap";

const Portfolio = () => {
    return (
      <div class="d-inliine-flex">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" className="img-fluid" />
          <Card.Body>
            <Card.Title>Philly Planner</Card.Title>
            <Card.Text>
              This app was created to test our group knowledge in a modern
              full-stack app utilizing React, Mongo, and GraphQL. Philly
              Planner's purpose is to provide guests with panning dinner events.
            </Card.Text>
            <Button variant="primary" href="https://ryanh610.github.io/nba-wizard/">Check it out</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" className="img-fluid" />
          <Card.Body>
            <Card.Title>Markdown Generator</Card.Title>
            <Card.Text>
              This app was created to test my knowledge in Node.js. The purpose of Markdown Generator is to help the user create a readme.md file for their projects.
            </Card.Text>
            <Button variant="primary" href="https://ryanh610.github.io/mdGenerator/">Check it out</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem",  }}>
        <Card.Img variant="top" src="" className="img-fluid"  />
        <Card.Body>
          <Card.Title>Coding Quiz</Card.Title>
          <Card.Text>
          This app was created to test my knowledge in vanilla JavaScript and JQuery. The purpose of this app is to provide the user with a timed, scored quiz that has a locally stored scoreboard.
          </Card.Text>
          <Button variant="primary" href="https://ryanh610.github.io/code-quiz/">Check it out</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem",  }}>
        <Card.Img variant="top" src="" className="img-fluid"  />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
          This app was created to test my knowledge in vanilla JavaScript and third-party APIs. The purpose of this app is to provide the user with a way to find the weather forcast in their city and save it to a list of favorites.
          </Card.Text>
          <Button variant="primary" href="https://ryanh610.github.io/weather-dashboard/">Check it out</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem",  }}>
        <Card.Img variant="top" src="" className="img-fluid"  />
        <Card.Body>
          <Card.Title>Auto Auction</Card.Title>
          <Card.Text>
          This app was created to test our group knowledge in backend technologies utilizing a RESTful API with all CRUD functions. This app lets users post and bid on cars when signed in.
          </Card.Text>
          <Button variant="primary" href="https://ryanh610.github.io/autoAuction/">Check it out</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem",  }}>
        <Card.Img variant="top" src="" className="img-fluid"  />
        <Card.Body>
          <Card.Title>NBA Wizard</Card.Title>
          <Card.Text>
          This app was created to test our group knowledge in frontend technologies utilizing a vanilla JavaScript. This app lets users check the season standings of any NBA team and check the list of games for that day.
          </Card.Text>
          <Button variant="primary" href="https://ryanh610.github.io/nba-wizard/">Check it out</Button>
        </Card.Body>
      </Card>
      </div>
    );
}

export default Portfolio;
