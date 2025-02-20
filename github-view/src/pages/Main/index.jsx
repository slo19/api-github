import React from "react";
import { MdSearch } from "react-icons/md";

import { Container, Form, Logo, Title, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";
import {theme} from "../../styles/Theme";

export default function Main () {
  return (
    <Container>
      <Logo
        src={githubLogo}
        alt="GitHub Logo"
      />
      <Title>
        API GitHub
      </Title>
      <Form> 
        <Input placeholder="Usuario"/>
        <Button><MdSearch size={42} color={theme.colors.text}/></Button>
      </Form>
      
    </Container>
  );
}

