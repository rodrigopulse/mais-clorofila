import React from 'react';
import styled from 'styled-components/native';
import { primaryColor, primaryColorActive } from '../assets/styles/Colors';

const Button = (props) => {
  return (
    <ButtonContainer onPress={props.onPress} underlayColor={primaryColorActive}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableHighlight`
  width: 100%;
  height: 55px;
  background: ${primaryColor};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #222;
  font-weight: 700;
  font-size: 16px;
`;

export default Button;
