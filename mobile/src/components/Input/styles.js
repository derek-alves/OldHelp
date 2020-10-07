import styled from 'styled-components';
import {Feather} from "@expo/vector-icons";

export const Container = styled.View`
    
    /* height:60px; */
    height:${
        (props)=> props.textArea ? '200px': '60px'
    };
    border-Radius:25px;
    border-Width:1.5px;
    margin:5px 20px;
    padding:0px 16px;
    border-Color:rgba(0,0,0,0.2);
    top:-5px;

    flex-direction:row;
    align-items:center;
    
`;

export const TextInput = styled.TextInput`
   flex:1;
   font-size:18px;
   margin: 10px;
`;

export const Icon = styled(Feather)`
    margin-right:5px;
`;