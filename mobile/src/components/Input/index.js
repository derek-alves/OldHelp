import React from 'react';
import { View } from 'react-native';


import { Container ,TextInput ,Icon} from './styles';

const Input = ({name,icon,textArea=null,...rest}) => {
  return (

  <Container textArea={textArea}>
      <Icon name={icon} size={20} color="#666360"/>
      <TextInput
        multiline={true}
        keyboardApparence="dark"
        placeholderTextColor="#666360" 
        {...rest}
      />
  </Container>
  
  );
}

export default Input;