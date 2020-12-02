import React from 'react';
import styled from 'styled-components/native';
import { secondaryColor } from '../assets/styles/Colors';

const Input = (props) => {
  return (
    <InputContainer
      keyboardType={props.type}
      autoCapitalize={props.autoCapitalize}
      placeholder={props.placeholder}
      placeholderTextColor="#666"
      secureTextEntry={props.secureTextEntry}
      value={props.value}
      onChangeText={props.onChange}
    />
  );
};

const InputContainer = styled.TextInput`
  width: 100%;
  height: 55px;
  border: 0;
  border-radius: 28px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: center;
  background: #fff;
  color: ${secondaryColor};
  font-size: 16px;
`;

export default Input;
