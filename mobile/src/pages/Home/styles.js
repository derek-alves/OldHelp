import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F5",
  },
  title: {
    padding: 37,
    fontSize: 35,
    marginLeft: -12,
    color:"#04d361",
    borderColor:"black",
    fontFamily:"Poppins_900Black",
    marginTop: 80,
    marginBottom: -50,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1
  },
  description: {
    fontSize: 20,
    marginLeft: 20,
    color: "grey",
  },
  buttonsContainer: {
    marginTop: 50,
    alignItems: "center",
  },

  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  buttonGroup2: {
    flexDirection: "row",
  },

  button: {
    height: 140,
    width: "40%",
    borderRadius: 20,
    backgroundColor: "#04d361",
    padding: 15,
    marginRight: 7,
    marginBottom: 11,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttonText: {
    color: "#F0F0F5",
    fontSize: 20,
    fontWeight: "bold",
  },

  header: {
    flexDirection: "row",
    
  },

  imagemMoldura:{
    height:170,
    width:'35%',
    marginTop:50,
    paddingHorizontal:10,
    paddingTop:10,
    borderRadius:20,
    backgroundColor:"#F0F0F5"
  },

  textMoldura:{
    fontFamily:"Poppins_900Black",
    fontSize:18,
    paddingVertical:15,
    color:"#5db076",
    textAlign:'center'
  }
});

export default styles;
