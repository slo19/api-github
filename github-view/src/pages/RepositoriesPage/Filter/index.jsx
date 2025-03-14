import React from "react";
import { Container, Selector, Cleaner } from "./styles";

function Filter() {
  const langs = [
    { name: "C#", count: 5, color: "#f1c40f" },
    { name: "HTML", count: 5, color: "#f100ff" },
    { name: "Shell Script", count: 5, color: "#a1ff0f" },
    { name: "TypeScript", count: 2, color: "#344fff" },
    { name: "Go", count: 3, color: "#3498db" },
  ];

  const selectors = langs.map(({ name, count, color }) => (
    <Selector key={name.toLowerCase} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));
  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
}

export default Filter;
