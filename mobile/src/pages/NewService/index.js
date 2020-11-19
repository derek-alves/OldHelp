import React,{useCallback,useRef} from 'react';
import { View ,Text,Image,Alert} from 'react-native';
import {RectButton,ScrollView} from 'react-native-gesture-handler';
import * as Yup from 'yup';
import {Form} from '@unform/mobile';
import { useNavigation } from "@react-navigation/native";


import styles from './styles';

import Header from '../../components/PageHeader';
import Input from '../../components/Input';


import getValidationErrors from '../../utils/getValidationErrors';


import api from "../../services/api";

const CreateService = () => {
  const navigation = useNavigation();

  const formRef = useRef(null);

  const handleCreateService = useCallback(async(data) => {
    try {
      
      formRef.current?.setErrors({});
        const schema = Yup.object().shape({
              title:Yup.string().required("Titulo obrigatório"),
              description:Yup.string().required('Descrição obrigatória').min(20,'Descrição muito curta'),
              price:Yup.number().typeError('Informe o valor').required('Valor obrigatório'),
            });

            await schema.validate(data,{
              abortEarly:false
            });

            await api.post("/service", data);

            console.log(data);
            navigation.goBack();

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
      <Header title="Crie um novo serviço" />

      
      <View
        style=
        {{
          paddingHorizontal:16,
          paddingBottom:16
        }}
      >      
      
        <View style={{...styles.container,marginTop:-60}}>
          <Form ref={formRef} onSubmit={handleCreateService}>
                <View style={styles.InputsGroup}>
                  <Input name="title"  icon="type" placeholder="Titulo"/>
                  <Input textArea name="description" multiline={true} icon="type" placeholder="Descrição do serviço"/>
                  <Input name="price" keyboardType="number-pad" icon="dollar-sign" placeholder="Preço/hora"/>
                </View>
              

                <RectButton 
                onPress={()=>{
                  formRef.current?.submitForm();
                  }}
                style={styles.contactButton}>
                      <Text style={styles.contactButtonText}>Cadastrar</Text>
                  </RectButton>
          </Form>
        </View>
        
    </View>
    </ScrollView>

    </>
  );
}

export default CreateService
;