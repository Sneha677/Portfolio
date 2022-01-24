import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sneha Sajjanar </span>
            from <span className="purple"> Hubballi, Karnataka, India.</span>
            <br />I am currently pursuing my engineering degree at KLE Technological University, Hubbali.
            <br />
            <br />
            Apart from coding, I also love to do some other activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build exiting and new things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SnehaSajjanar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
