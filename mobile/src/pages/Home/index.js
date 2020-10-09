import React,{useCallback} from 'react';
import { View ,Text,TouchableOpacity} from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
 import styles from './styles';

const Home = () => {

  const {navigate}= useNavigation();

  const handleNavigateToServiceNotification = useCallback(()=>{
    navigate('ServiceNotification');
  },[]);
  
  const handleNavigateToServicesPage = useCallback(()=>{
     navigate('ServicesPages');
  },[]);


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
        <RectButton
            onPress={handleNavigateToServicesPage}  
            style={styles.button}
            >
          <Icon name="home" size={70} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Home</Text>
        </RectButton>


        <RectButton 
          style={styles.button}
          >
          <Icon name="heart" size={60} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Favoritos</Text>
        </RectButton>
      </View>

      <View style={styles.buttonGroup2}>    
        <RectButton activeOpacity={0.8} style={styles.button}>
          <Icon name="user" size={70} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Perfil</Text>
        </RectButton>


        <RectButton 
        onPress={handleNavigateToServiceNotification} 
        activeOpacity={0.8} 
        style={styles.button}
        >
          <Icon name="bell" size={65} color='#F0F0F5'/>
          <Text style={styles.buttonText}>Notificações</Text>
        </RectButton>
      </View>

    </View>  


    </View>
  );
}

export default Home;