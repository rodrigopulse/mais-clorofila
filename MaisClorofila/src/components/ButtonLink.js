import React from 'react';
import styled from 'styled-components/native';
import {primaryColor} from '../assets/styles/Colors';

const Button = (props) => {
  return (
    <ButtonLinkContainer>
      <ButtonLinkText>{props.text}</ButtonLinkText>
    </ButtonLinkContainer>
  );
};

const ButtonLinkContainer = styled.TouchableHighlight`
  width: auto;
  height: 35px;
  padding: 0 25px;
  background: ${primaryColor};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const ButtonLinkText = styled.Text`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #222;
  font-weight: 700;
  font-size: 16px;
`;

export default Button;
