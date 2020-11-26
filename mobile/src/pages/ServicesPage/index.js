import React,{useEffect,useState} from 'react';
import {View,ScrollView} from 'react-native';

import ServiceItem from '../../components/ServiceItem';

import PageHeader from '../../components/PageHeader';
import styles from './styles';

import api from '../../services/api';

function ServicesPage(){

  const [services,setServices] = useState([]);

  async function loadServices(){
    const response = await api.get("/service");
    setServices(response.data);
  }

  useEffect(()=>{
    loadServices();
  },[])

return (
        <View style={styles.container}>
            <PageHeader title="Serviços disponíveis"/>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal:16,
              paddingBottom:16  
            }}
            style={styles.serviceList}
            >

             {
               services.map((service)=>(
                <ServiceItem  key={service.id} id={service.id} title={service.title} description={service.description} price={service.price}/>
               ))
             }
                
            </ScrollView>
            
        </View>
);
}

export default ServicesPage;