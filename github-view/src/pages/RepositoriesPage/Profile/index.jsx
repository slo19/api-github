import React from "react";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";
import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/42870236?v=4" />
        <Login>Username</Login>
        <Name>Name</Name>
        <Inner>
          <Data>
            <MdGroup size={20} /> 30&nbsp; <i>seguidores</i>&nbsp; &middot; 1
            &nbsp;
            <i>seguindo</i>
          </Data>
          <Data>
            <MdWork size={20} /> Sau.lo
          </Data>
          <Data>
            <MdLocationCity size={20} /> BH
          </Data>
          <Data>
            <MdLink size={20} /> <a href="www.slo19.dev">slo19.dev</a>
          </Data>
        </Inner>
      </Header>
    </Container>
  );
}

export default Profile;
