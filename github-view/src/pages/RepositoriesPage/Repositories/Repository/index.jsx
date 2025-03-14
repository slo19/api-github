import React from "react";
import { Container, Name, Description, Lang, Link, Footer } from "./styles";

function Repository() {
  return (
    <Container>
      <Name>Name</Name>
      <Description>Description</Description>
      <Footer color="#349ddd">
        <Lang>Lang</Lang>
        <Link href="https://www.example.com" target="_blank">
          ver
        </Link>
      </Footer>
    </Container>
  );
}

export default Repository;
