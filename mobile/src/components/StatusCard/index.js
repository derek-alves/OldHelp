import React from "react";


import { Container, Profile, Name, ProfileInfo, Servico,ServicoText } from "./styles";

const StatusCard = ({ user }) => {

  return (
    <Container elevation={3}>
        <Profile>
          <ProfileInfo>
            <Servico>
             <ServicoText>{user.title}</ServicoText> 
            </Servico>
          </ProfileInfo>
        </Profile>
    </Container>
  );
};

export default StatusCard;
