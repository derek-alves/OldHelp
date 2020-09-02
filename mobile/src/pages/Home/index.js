import React from 'react';
import { View ,Text,TouchableOpacity} from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';
 import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          OldHelp
      </Text>

      <Text style={styles.description}>
          Ajude pessoas e seja ajudado!
      </Text>

    <View style={styles.buttonsContainer}>
      
      <View style={styles.buttonGroup}>    
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Icon name="home" size={70} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Icon name="heart" size={60} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Favoritos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup2}>    
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Icon name="user" size={70} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Perfil</Text>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <Icon name="bell" size={65} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Notificações</Text>
        </TouchableOpacity>
      </View>

    </View>  


    </View>
  );
}

export default Home;