import styled,{css} from 'styled-components';
import {Feather} from "@expo/vector-icons";

export const Container = styled.View`
    
    height:${
        (props)=> props.textArea ? '200px': '60px'
    };
    border-Radius:25px;
    border-Width:2px;
    margin:5px 20px;
    padding:0px 16px;
    border-Color:rgba(0,0,0,0.2);
    top:-5px;

    flex-direction:row;
    align-items:center;

    ${props=> props.isErrored && css`
        border-color:#c53030;
    `} 
    

    ${props=> props.isFocused && css`
        border-color:#04d361;
    `} 
    
`;

export const TextInput = styled.TextInput`
   flex:1;
   font-size:20px;
   ${props=> props.isFocused && css`
        color:#04d361;
    `} 
`;

export const Icon = styled(Feather)`
    margin-right:10px;
`;