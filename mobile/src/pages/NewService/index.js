import React from 'react';
import {View,Text} from 'react-native';
import PageHeader from '../../components/PageHeader';
import styles from './styles';

function NewService(){
return (
    <View style={styles.container}>
        <PageHeader title="Novo pedido de ajuda"/>
    </View>
);
}

export default NewService;