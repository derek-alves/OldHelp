import React from 'react';
import { View ,Text,Image} from 'react-native';
import styles from './styles';
import Header from '../../components/PageHeader';

import Input from '../../components/Input';




import {RectButton,ScrollView} from 'react-native-gesture-handler';

const CreateAccount = () => {
  return (
    <>
    <ScrollView
      keyboardShouldPersistTaps="handled"
    >
      <Header title="Informe os dados abaixo" />

      
      <View
        style=
        {{
          paddingHorizontal:16,
          paddingBottom:16
        }}
      >      
      
        <View style={{...styles.container,marginTop:-60}}>
            <View style={styles.InputsGroup}>
              <Input name="name" icon="user" placeholder="Nome completo"/>
              <Input name="email" icon="mail" placeholder="E-mail"/>
              <Input name="telefone" icon="phone" placeholder="telefone"/>
              <Input name="cpf" icon="key" placeholder="CPF"/>
              <Input name="password" icon="lock" placeholder="Senha"/>
            </View>
          

            <RectButton style={styles.contactButton}>
                  <Text style={styles.contactButtonText}>Cadastrar</Text>
              </RectButton>
        
        </View>
        
    </View>
    </ScrollView>

    </>
  );
}

export default CreateAccount;