import styled from 'styled-components/native';



export const Container = styled.View`
  background-color:#FFF;
  border-width:1px;
  border-color:#e6e6f0;
  border-radius:8px;
  margin-bottom:16px;
  overflow:hidden;
  height:150px;
  width:100%;
  padding:0 20px;
  box-shadow: 30px 5px 5px #000;
`;

export const Profile = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding:10px 0;
`;

export const ProfileInfo = styled.View`
  
`;

export const Name = styled.Text`
  font-weight:bold;
  font-size:20px;
`;


export const Cargo = styled.Text`
  font-size:15px;
`;

export const Servico = styled.Text`
  font-size:15px;
  margin-top:4px;
`;

export const AcceptButton = styled.TouchableOpacity`
  background-color:#04d361;
  height:45px;
  width:78%;
  border-radius:8px;
  justify-content:center;
  align-items:center;
  margin-right:8px;

`;


export const ButtonsContainer = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  
`;
export const FavoriteButton = styled.TouchableOpacity`
  background-color:#04d361;
  width:50px;
  height:45px;
  border-radius:8px;
  justify-content:center;
  align-items:center;
  margin-right:8px;
`;

export const TextAcceptButton =styled.Text`
   font-size:20px;
   color:#FFF;
`;

