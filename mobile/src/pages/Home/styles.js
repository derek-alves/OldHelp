import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#F0F0F5',
  },
  title:{
    padding:60,
    fontSize:40,
    marginLeft:-40,
    fontWeight:"bold",
    marginTop:50,
    marginBottom:-50
  },
  description:{
    fontSize:20,
    marginLeft:20,
    color:'grey'
  },
  buttonsContainer:{
    marginTop:60,
    alignItems:'center'
  },

  buttonGroup:{
    flexDirection:'row',
    justifyContent:'space-around'
  },


  buttonGroup2:{
    flexDirection:'row'
  },

  button:{
    height:150,
    width:'45%',
    borderRadius:20,
    backgroundColor:'#04d361',
    padding:24,
    marginRight:7,
    marginBottom:11,
    marginLeft:5,
    alignItems:'center',
    justifyContent:'space-between'
  },

  buttonText:{
    color:'#FFF',
    fontSize:20,
    fontWeight:"bold"
  }
});

export default styles;