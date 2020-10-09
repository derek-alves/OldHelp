import { StatusBar } from 'expo-status-bar';
import React,{useCallback,useRef}from 'react';
import { StyleSheet, Text, View , Image, Dimensions, TextInput,TouchableOpacity,Alert} from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State ,RectButton} from 'react-native-gesture-handler';
import * as Yup from 'yup'; 


import getValidationErrors from '../../utils/getValidationErrors'; 

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';


const {height,width} = Dimensions.get('window');




import Input from '../../components/Input';


const LandingPage = () => {


  const formRef = useRef(null);
  
  const inputRef = useRef(null);

  const {navigate}= useNavigation();


  const handleNavigateToCreateAccount = useCallback(()=>{
     navigate('CreateAccount');
  },[])

  const handleSignIn = useCallback(async(data) => {
    try {

      formRef.current?.setErrors({});
        const schema = Yup.object().shape({
              email:Yup.string().required('E-mail obrigatório').email('Digite um e-mail várlido'),
              password:Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data,{
              abortEarly:false
            });

          } catch (error) {
            
            if(error instanceof Yup.ValidationError){
            const errors = getValidationErrors(error);
            const array = []
            Object.entries(errors).forEach(entry => {
              const [key, value] = entry;
              array.push(value)
            })
            Alert.alert('Error no cadastramento',array.toString().replace(/,/g,'\n'))
            formRef.current?.setErrors(errors);
            formRef.current?.setErrors(errors);
              
            return;
          }

        }
  },[]);



  function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0)
    };
  
    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease)
    };
  
    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]),
      timing(clock, state, config),
      cond(state.finished, stopClock(clock)),
      state.position
    ]);
  }




  const buttonOpacity = new Value(1);
  
  const onStateChange = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 1, 0))
          )
        ])
    }
  ]);

  const onCloseState = event([
    {
      nativeEvent: ({ state }) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 0, 1))
          )
        ])
    }
  ]);


  const buttonY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [100, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const bgY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-height / 3, 0],
    extrapolate: Extrapolate.CLAMP
  });

  const textInputZindex = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1,-1],
    extrapolate: Extrapolate.CLAMP
  });


  const textInputY = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [0,100],
    extrapolate: Extrapolate.CLAMP
  });

  const textInputOpacity = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1,0],
    extrapolate: Extrapolate.CLAMP
  });

  const rotateCross = interpolate(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180,360],
    extrapolate: Extrapolate.CLAMP
  });



  return (
    <View style={{
      flex:1, 
      backgroundColor:'white',
      justifyContent:'flex-end'
      }}>

      <Animated.View style={{
        ...StyleSheet.absoluteFill,
        transform:[{translateY:bgY}]
      
      }}>
        <Image 
        source={require('../../assets/bg.jpg')}
        style={{flex:1, height:null, width:null}}
        />
      </Animated.View>

      <View style={{height:height/3}}>

      
        <TapGestureHandler onHandlerStateChange={onStateChange}>
           
              <Animated.View style={{
                ...styles.button,
                opacity:buttonOpacity,
                transform:[{translateY:buttonY}]
                }}>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>SIGN IN</Text>
              </Animated.View>
            
          </TapGestureHandler>
      

        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={handleNavigateToCreateAccount}
        >          
          <Animated.View style={{
            ...styles.button,
            opacity:buttonOpacity,
            transform:[{translateY:buttonY}]
            }}>
              <Text 
              style={{
                fontSize:20,
                fontWeight:'bold',
                }}>

                SIGN UP</Text>
          </Animated.View>
        </TouchableOpacity>

          <Animated.View
          keyboardShouldPersistTaps="handled"
           style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            zIndex:textInputZindex,
            opacity:textInputOpacity,
            transform:[{translateY:textInputY}],
            height:height/2.2,
            ...StyleSheet.absoluteFill,
            top:null,
            justifyContent:'center',
        
            }}>

              <TapGestureHandler onHandlerStateChange={onCloseState}>
                <Animated.View elevation={5} style={styles.closeButton}>
                    <Animated.Text style={{fontSize:15,transform:[
                      {rotate:concat(rotateCross,'deg')}
                    ]}}>
                      X
                    </Animated.Text>
                </Animated.View>
              </TapGestureHandler>

        <Form ref={formRef} onSubmit={handleSignIn}>


              <Input 
                autoCorrect={false}
                multiline={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email" 
                icon="mail" 
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={()=>{
                  inputRef.current?.focus();
                }}
              />

              <Input 
                ref={inputRef}
                name="password" 
                icon="lock" 
                multiline={false}
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={()=>{
                  formRef.current?.submitForm();
                }}
              />

             
              <TouchableOpacity
              activeOpacity={0.7}
              onPress={()=>{
                formRef.current?.submitForm();
              }}
              >
              <Animated.View elevation={5} style={{...styles.button,top:-5}}>
                  
                  <Text 
                  style={{
                    fontSize:20,
                    fontWeight:'bold',}}
                    >
                    SIGN IN 
                  </Text>
                 
              </Animated.View>
              </TouchableOpacity>
          </Form>
              <TouchableOpacity>
                    <Text style={{textAlign:"center",fontSize:16,marginTop:12}}>Esqueci minha senha</Text>
              </TouchableOpacity>
          </Animated.View>
  
      </View>
    </View>
  );
}

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'white',
    height:70,
    marginHorizontal:20,
    borderRadius:35,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:5,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2
    
  },
  closeButton:{
    height:40,
    width:40,
    backgroundColor:'white',
    borderRadius:20,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:-20,
    left:width / 2 -20,
    shadowOffset:{width:2,height:2},
    shadowColor:'black',
    shadowOpacity:0.2
  },
  forgotPass:{
    alignItems:'center',
    justifyContent:'center',
  }

});
