import React from "react";
import { Button, Image } from "react-bootstrap";
import headshot from './images/headshot.jpg'

const AboutMe = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-evenly", backgroundColor: "dimGray", borderStyle: "solid", borderWidth: "2px", borderColor: "black", borderBottomLeftRadius: "3rem", borderBottomRightRadius: "3rem", marginLeft: "2rem", marginRight: "2rem", marginBottom: "2rem", marginTop: "3rem"}}>
      <Image src={headshot} className="img-fluid" style={{ width: "30rem", borderRadius: "3rem", margin: "3rem", borderStyle: "solid", borderWidth: "2px", borderColor: "black" }} />
      <div style={{ width: "35rem", margin: "3rem" }}>
        <main style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
          <h2 style={{fontWeight: "bold"}}>About Me</h2>
          <p style={{fontWeight: "bold", fontSize: "18px", lineHeight: "1.5"}}>
          During my university studies of Information and Technology, I found a passion for creating software. I am developing skills in JavaScript to fulfill my intrigue of creating and optimizing applications. I also enjoy meeting new people and learning about their lives and outlook.
          <br />
          <br />
          Raised in King of Prussia, PA. Upper Merion and Penn State alumni.
          </p>
          <Button variant="primary" style={{ width: "50%" }}>check out my projects!</Button>
        </main>
      </div>
    </div>
  );
}

export default AboutMe;
