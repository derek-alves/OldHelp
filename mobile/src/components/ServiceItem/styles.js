import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFF',
      borderWidth:1,
      borderColor:'#e6e6f0',
      borderRadius:8,
      marginBottom:16,
      overflow:'hidden'
    },
    profile:{
      flexDirection:'row',
      alignItems:'center',
      padding:24,
    },
  
    avatar:{
      width:64,
      height:64,
      borderRadius:32,
      backgroundColor:'#eee'
    },

    profileInfo:{
      marginLeft:16
    },
    
    name:{
      fontWeight:"bold",
      fontSize:20
    },

    subject:{
      fontSize:15,
      marginTop:4
    },

    bio:{
      marginHorizontal:24,
      fontSize:16,
      lineHeight:24,
    },
    
    footer:{
      backgroundColor:'#fafafc',
      padding:8,
      alignItems:'center',
      marginTop:24
    },
    price:{
      color:'#6a6180',
      fontSize:14
    },
    priceValue:{
      color:"#04d361",
      fontWeight:'bold',
      fontSize:16
    },
    buttonsContainer:{
      flex:1,
      marginTop:16,
      justifyContent:"center",
      alignItems:"center"
    },
  
    contactButton:{
      backgroundColor:'#04d361',
      flex:1,
      height:56,
      width:300,
      borderRadius:8,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },

    contactButtonText:{
      color:'#FFF',
      fontWeight:'bold',
      fontSize:16,
      marginLeft:16
    }

  

});

export default styles;