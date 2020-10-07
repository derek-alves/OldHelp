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
      <Header title="Crie um novo serviço" />

      
      <View
        style=
        {{
          paddingHorizontal:16,
          paddingBottom:16
        }}
      >      
      
        <View style={{...styles.container,marginTop:-60}}>
            <View style={styles.InputsGroup}>
              <Input textArea name="Descrição" icon="type" placeholder="Descrição do serviço"/>
              <Input name="valor" icon="dollar-sign" placeholder="Preço/hora"/>
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