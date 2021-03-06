import React,{useEffect,useRef,useCallback,useImperativeHandle,useState,forwardRef} from 'react';
import { View } from 'react-native';

import {useField} from '@unform/core';

import { Container ,TextInput ,Icon} from './styles';

const Input = ({name,icon,textArea=null,...rest},ref) => {

  const inputElementRef = useRef(null);

  const {registerField,defaultValue = '',fieldName,error} = useField(name);
  const inputValueRef = useRef({value:defaultValue});

  useImperativeHandle(ref,()=>({
    focus(){
      inputElementRef.current.focus();
    }
  }));

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref:inputValueRef.current,
      path:'value',
      setValue(ref,value){
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text:value});
      },
      clearValue(){
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    })
  },[fieldName,registerField]);
  
  const handleInputFocus = useCallback(()=>{
      setIsFocused(true);
  },[])

  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
},[])

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  return (

  <Container textArea={textArea} isFocused={isFocused} isErrored={!!error}>
      <Icon name={icon} size={25} color={isFocused || isFilled ? '#04d361' :'#666360' }/>
      <TextInput
        ref={inputElementRef}
        multiline={true}
        keyboardApparence="dark"
        placeholderTextColor="#666360" 
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value)=>{
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
  </Container>
  
  );
}

export default forwardRef(Input);