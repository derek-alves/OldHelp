import React,{useCallback,useRef} from 'react';
import { View ,Text,Image,Alert} from 'react-native';
import {RectButton,ScrollView} from 'react-native-gesture-handler';
import * as Yup from 'yup';
import {Form} from '@unform/mobile';


import styles from './styles';

import Header from '../../components/PageHeader';
import Input from '../../components/Input';


import getValidationErrors from '../../utils/getValidationErrors';




const CreateService = () => {

  const formRef = useRef(null);

  const handleCreateService = useCallback(async(data) => {
    try {
      console.log(data);
      formRef.current?.setErrors({});
        const schema = Yup.object().shape({
              descricao:Yup.string().required('Descrição obrigatória').min(20,'Descrição muito curta'),
              valor:Yup.number().typeError('Informe o valor').required('Valor obrigatório'),
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
                  <Input textArea name="descricao" multiline={true} icon="type" placeholder="Descrição do serviço"/>
                  <Input name="valor" keyboardType="number-pad" icon="dollar-sign" placeholder="Preço/hora"/>
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