import React from 'react';
import { Container, Header, Avatar, Login, Name } from "./styles";

function Profile() {
  return(
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/42870236?v=4"/>
        <Login>Username</Login>
        <Name>Name</Name>
      </Header>
    </Container>
  );
}

export default Profile;
