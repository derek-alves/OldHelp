import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#FFF',
      borderWidth:1,
      borderColor:'#e6e6f0',
      borderRadius:20,
      height:395,
      overflow:'hidden',
    },
    InputsGroup:{
    
      alignItems:'center',
      paddingTop:24,
      paddingVertical:30,
    },
  
    contactButton:{
      backgroundColor:'#04d361',
      height:56,
      borderRadius:8,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:20,
      marginBottom:20,
      marginTop:-20
    },

    contactButtonText:{
      color:'#FFF',
      fontWeight:'bold',
      fontSize:22,
      textAlign:'center'
    }

  

});

export default styles;