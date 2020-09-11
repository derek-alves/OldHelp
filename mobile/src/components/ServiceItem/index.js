import React from 'react';
import { View,Image,Text} from 'react-native';

import heartOutlineIcon from '../../assets/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/icons/unfavorite.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';


import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

const ServiceItem = () => {
  return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image
            style={styles.avatar}
            source={{uri:'https://github.com/derek-alves.png'}}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Derek Enrique</Text>
              <Text style={styles.subject}>Programação</Text>
            </View>
        </View>
        <Text style={styles.bio}>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. 
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            Preço/hora {'   '}
            <Text style={styles.priceValue}>R$ 20,00</Text>
          </Text>
          
          <View style={styles.buttonsContainer}>
              <RectButton style={styles.favoriteButton}>
                  <Image source={heartOutlineIcon}/>
              </RectButton>

              <RectButton style={styles.contactButton}>
                  <Image source={whatsappIcon}/>
                  <Text style={styles.contactButtonText}>Entrar em contato</Text>
              </RectButton>
          </View>
        </View>
    </View>

  );
}

export default ServiceItem;