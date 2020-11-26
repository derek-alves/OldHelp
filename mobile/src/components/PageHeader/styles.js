import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor:'#04d361'
    },
    topBar:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    } ,
    title:{
      fontWeight:"bold",
      color:"#FFF",
      fontSize:24,
      lineHeight:32,
      maxWidth:160,
      marginTop:20,
      marginVertical:40
    },
    oldhelp:{
      fontSize:15,
      color:'#FFF',
      fontFamily:"Poppins_600SemiBold"
    }
})

export default styles;