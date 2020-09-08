import React from 'react';
import {View,Text} from 'react-native';

import PageHeader from '../../components/PageHeader';
import styles from './styles';

function ServicesPage(){
return (
        <View style={styles.container}>
            <PageHeader title="Serviços disponíveis"/>
        </View>
);
}

export default ServicesPage;