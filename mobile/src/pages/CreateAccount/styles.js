import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFF',
      borderWidth:1,
      borderColor:'#e6e6f0',
      borderRadius:20,
      height:470,
      overflow:'hidden',
    },
    InputsGroup:{
    
      alignItems:'center',
      paddingVertical:20,
    },
  
    contactButton:{
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

    contactButtonText:{
      color:'#FFF',
      fontWeight:'bold',
      fontSize:22,
      textAlign:'center'
    }

  

});

export default styles;