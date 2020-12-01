import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

import PageHeader from '../../components/PageHeader';
import FavoriteCard from '../../components/FavoriteCard';

import {Container} from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  console.log(favorites);
  return (
    <Container>
      <StatusBar style="light" />
      <PageHeader color="red" title="Usuários favoritos" />

      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{
         paddingHorizontal:16,
         paddingBottom:16  
       }}
       style={{marginTop:-30, paddingLeft:20,marginRight:-10}}
      >
        {favorites.map(User => {
          return (
            <FavoriteCard
              key={Math.random().toString(36).substring(7)}
              user={User}
            />
          );
        })}
      </ScrollView>
    </Container>
  );
}

export default Favorites;