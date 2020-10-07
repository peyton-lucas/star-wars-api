import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Characters(props) {
  const mappedCharacters = props.myArray.map(character => {
    return (
      <Button variant="primary" size="lg" block>
        {character.name}
      </Button>
    );
  });

  return (
    <Container>
      <Row>
        <Col>{mappedCharacters.slice(0, mappedCharacters.length / 2)}</Col>
        <Col>{mappedCharacters.slice(mappedCharacters.length / 2)}</Col>
      </Row>
    </Container>
  );
}