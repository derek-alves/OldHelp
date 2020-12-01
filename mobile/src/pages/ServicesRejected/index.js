import React,{useEffect,useState} from 'react';
import {View,ScrollView} from 'react-native';

import StatusCard from '../../components/StatusCard';

import PageHeader from '../../components/PageHeader';
import styles from './styles';

import api from '../../services/api';

function ServicesRejected(){

  const [rejeitado,setRejeitado] = useState([]);

    async function loadServices() {
      const response = await api.get("/connection/users",{
        params:{
          status:'Rejeitado'
        }
      });

      setRejeitado(response.data);
    }
    
  

  useEffect(()=>{
    loadServices();
  },[rejeitado])
return (
        <View style={styles.container}>
            <PageHeader
            color="#04d361" 
            title="Serviços rejeitados"/>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal:16,
              paddingBottom:16  
            }}
            style={styles.serviceList}
            >

             {
               rejeitado.map((service)=>(
                <StatusCard  key={Math.random().toString(36).substring(7)} user={service}/>
               ))
             }
                
            </ScrollView>
            
        </View>
);
}

export default ServicesRejected;