import React from 'react';
import {View,ScrollView} from 'react-native';

import ServiceItem from '../../components/ServiceItem';

import PageHeader from '../../components/PageHeader';
import styles from './styles';

function ServicesPage(){
return (
        <View style={styles.container}>
            <PageHeader title="Serviços disponíveis"/>
            <ScrollView 
            contentContainerStyle={{
              paddingHorizontal:16,
              paddingBottom:16  
            }}
            style={styles.serviceList}
            >
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
            </ScrollView>
            
        </View>
);
}

export default ServicesPage;