import React from "react";
import { Row } from "react-bootstrap";
import "../App.css";

const headerText = {
  text: "My Favorite Star Wars Characters"
}

export default function Header() {
  return(
    <Row className="App-header">
      <h1>{headerText.text}</h1>
    </Row>
  );
}