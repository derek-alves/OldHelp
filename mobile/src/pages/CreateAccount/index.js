import React,{useCallback,useRef}from 'react';
import { View ,Text,Alert} from 'react-native';
import {Form} from '@unform/mobile';
import styles from './styles';
import Header from '../../components/PageHeader';

import * as Yup from 'yup';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';



import {RectButton,ScrollView,TouchableOpacity} from 'react-native-gesture-handler';

const CreateAccount = () => {
  const formRef = useRef(null);

  const emailInputRef = useRef(null);

  const phoneInputRef = useRef(null);

  const cpfInputRef = useRef(null);

  const passwordInputRef = useRef(null);


  const handleCreateAccount = useCallback(async(data) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});
        const schema = Yup.object().shape({
              
              
              name:Yup.string().required('Nome obrigatório'),
              email:Yup.string().required('E-mail obrigatório').email('Digite um e-mail várlido'),
              telefone:Yup.string().required('Telefone obrigatório').min(11,'Telefone precisa ter 11 dígitos'),
              cpf:Yup.string().required('CPF obrigatório').min(11,'CPF precisa ter 11 dígitos'),
              password:Yup.string().required('Senha obrigatória').min(6,'Senha no minimo 6 dígitos'),
              
              
            });

            await schema.validate(data,{
              abortEarly:false
            });

          } catch (error) {
            
            if(error instanceof Yup.ValidationError){
            const errors = getValidationErrors(error);
            const array = []
            Object.entries(errors).forEach(entry => {
              const [key, value] = entry;
              array.push(value)
            })
            Alert.alert('Error no cadastramento',array.toString().replace(/,/g,'\n'))
            formRef.current?.setErrors(errors);
            
            return;
          }
          

        }
  },[]);



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
        <Form ref={formRef} onSubmit={handleCreateAccount}>
            <View style={styles.InputsGroup}>
         
              <Input autoCapitalize="words" multiline={false} name="name" returnKeyType="next" icon="user" placeholder="Nome completo"
              onSubmitEditing={()=>{
                emailInputRef.current?.focus();
              }}
              />
              <Input ref={emailInputRef} keyboardType="email-address" multiline={false} returnKeyType="next"  autoCapitalize="none" autoCorrect={false} name="email" icon="mail" placeholder="E-mail"
              onSubmitEditing={()=>{
                phoneInputRef.current?.focus();
              }}
              />
              <Input ref={phoneInputRef} keyboardType="number-pad" multiline={false} returnKeyType="next" name="telefone" icon="phone" placeholder="telefone"
              onSubmitEditing={()=>{
                cpfInputRef.current?.focus();
              }}
              />
              <Input ref={cpfInputRef} keyboardType="number-pad" name="cpf" icon="key" returnKeyType="next" placeholder="CPF"
              onSubmitEditing={()=>{
                passwordInputRef.current?.focus();
              }}
              />
              <Input 
              ref={passwordInputRef} 
              name="password" 
              icon="lock" 
              secureTextEntry
              textContentType="newPassword"
              multiline={false} 
              placeholder="Senha"
              returnKeyType="send"
                onSubmitEditing={()=>{
                  formRef.current?.submitForm();
                }}
              />
            </View>
          
            <RectButton 
                onPress={()=>{
                formRef.current?.submitForm();
                }}
                style={styles.contactButton}
               >
                  <Text style={styles.contactButtonText}>Cadastrar</Text>
              </RectButton>
            
          </Form>

          
        </View>
        
    </View>
    </ScrollView>

    </>
  );
}

export default CreateAccount;