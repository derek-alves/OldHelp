import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFF',
      borderWidth:1,
      borderColor:'#e6e6f0',
      borderRadius:20,
      height:350,
      overflow:'hidden',
    
    },
    InputsGroup:{
    
      alignItems:'center',
      paddingVertical:40,
    },
  
    button:{
      backgroundColor:'#04d361',
      height:60,
      borderRadius:8,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:20,
      marginBottom:20,
      marginTop:-5
    },

    Recoverpassword:{
      color:"grey",
      fontSize:18,
      textAlign:'center'
    }

  

});

export default styles;