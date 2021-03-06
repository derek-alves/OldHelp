import React from 'react';
import {View, Image,Text} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';



import backIcon from '../../assets/icons/back.png';

import styles from './styles';

const PageHeader = ({title,color}) => {
  const {navigate} = useNavigation();

  function handleGoBack(){
   navigate('Home');
  }

  return (
  <View style={{...styles.container,backgroundColor:color}}>
    <View style={styles.topBar}>
      <BorderlessButton onPress={handleGoBack}>
          <Image elevation={15} source={backIcon} resizeMode="contain"/>
      </BorderlessButton>

      <Text style={styles.oldhelp}>OldHelp</Text>
    </View>
    <Text style={styles.title}>
          {title}
      </Text>
  </View>
  )
}

export default PageHeader;