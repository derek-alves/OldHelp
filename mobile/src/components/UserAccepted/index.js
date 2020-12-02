import React ,{useState}from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { Container, Profile, Name, ProfileInfo, Servico ,ButtonsContainer,FavoriteButton} from "./styles";
import HearthOutLineIcon from "../../assets/icons/heart-outline.png";
import UnfavoriteIcon from "../../assets/icons/unfavorite.png";
import AsyncStorage from "@react-native-community/async-storage";

const UserAccepted = ({ user ,favorited}) => {
  const { navigate } = useNavigation();
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleNavigateToConnection() {
    navigate("ProfileContact", {
      userid: user.user_id,
    });
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((userItem) => {
        return userItem.user_id === user.user_id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(user);

      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <Container>
      <Profile>
        <ProfileInfo>
          <Name>{user.name}</Name>

          <Servico>
            <Text>Serviço: </Text>
            {user.title}
          </Servico>
        </ProfileInfo>
      </Profile>

      <ButtonsContainer>
        <FavoriteButton onPress={handleToggleFavorite} favorited={isFavorited}>
          {isFavorited ? (
            <Image source={UnfavoriteIcon} />
          ) : (
            <Image source={HearthOutLineIcon} />
          )}
        </FavoriteButton>
        <TouchableOpacity
          onPress={handleNavigateToConnection}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical:9,
            borderRadius: 8,
            width: "80%",
            borderWidth: 2,
            borderColor: "#04d361",
            marginLeft: 5,
          }}
        >
          <Text
            style={{
              color: "#04d361",
              fontWeight: "bold",
              fontSize: 18,
              marginLeft: 0,
            }}
          >
            Entrar em contato
          </Text>
        </TouchableOpacity>
      </ButtonsContainer>
    </Container>
  );
};

export default UserAccepted;
