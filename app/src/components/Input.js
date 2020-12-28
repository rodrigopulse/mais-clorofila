import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { secondaryColor } from '../assets/styles/Colors';

const Input = (props) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (props.value !== '') {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [props.value]);
  return (
    <>
      {active && <TextLabel active={active}>{props.placeholder}</TextLabel>}
      <InputContainer
        keyboardType={props.type}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor="#666"
        value={props.value}
        onChangeText={props.onChange}
        active={active}
      />
    </>
  );
};

const InputContainer = styled.TextInput`
  width: 100%;
  height: 55px;
  border: 0;
  border-radius: 8px;
  padding-left: 30px;
  padding-right: 30px;
  text-align: left;
  background: #fff;
  color: ${secondaryColor};
  font-size: 16px;
  padding-top: ${(props) => (props.active ? '18px' : '12px')};
`;

const TextLabel = styled.Text`
  width: 100%;
  height: auto;
  font-size: 12px;
  position: absolute;
  top: 5px;
  left: 30px;
  z-index: 1;
`;

export default Input;
