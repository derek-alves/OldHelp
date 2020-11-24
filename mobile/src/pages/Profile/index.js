import React,{useState,useEffect} from "react";
import { Text, Image, TouchableOpacity, StyleSheet,View} from "react-native";
import Header from "../../components/PageHeader";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import api from '../../services/api';


import { Feather } from '@expo/vector-icons';
import { Container, ProfileContent, Body, Name } from "./styles";

function Profile() {
  const [services,setServices] = useState([]);
  const [images, setImages] = useState([]);

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso às suas fotos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;
    setImages([...images, image]);
  }




  async function loadProfile(){
    const response = await api.get("/user/show");
    setServices(response.data);
  }

  useEffect(()=>{
    loadProfile();
  },[])
  return (
    <Container>
      <Header />
    
      <ProfileContent>
      
     
      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
        <Text style={{marginBottom:10, fontFamily:'Poppins_500Medium',fontSize:20}}>Imagem do perfil</Text>
        <Feather name="plus" size={50} color="black" />
      </TouchableOpacity>
 
       {
        services.avatar ? <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          marginTop: -110,
          zIndex: 2,
        }}
        source={require("../../assets/0.jpeg")}
      /> : console.log("não foi")
       }

        <Body>
          
        <Name>{services.name}</Name>
        <Text style={{ fontSize: 20 }}>{services.email}</Text>
  

          <TouchableOpacity
            style={{
              flexDirection:"row",
              justifyContent:"center",
              alignItems: "center",
              padding: 15,
              borderRadius: 8,
              width: "85%",
              borderWidth: 2,
              borderColor: "#04d361",
              marginTop:30
            }}
          >
             <FontAwesome name="whatsapp" color="#04d361" size={20} />
            <Text
              style={{
                color: "#04d361",
                fontWeight: "bold",
                fontSize: 18,
                marginLeft: 16,
              
              }}
            >
              Entrar em contato
            </Text>
          </TouchableOpacity>
        </Body>
       
      </ProfileContent>

      
    </Container>
  );
}

export default Profile;
const styles = StyleSheet.create({
  uploadedImagesContaier: {
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:40,
    zIndex:2
  },

  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8,
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 55,
    width:"50%",
    justifyContent: 'center',
    alignItems: 'center',
     marginTop: 10,
    paddingBottom:43,
    margin:-30,
    zIndex:2
  },
  
});