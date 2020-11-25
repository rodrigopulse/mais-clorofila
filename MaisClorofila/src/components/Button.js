import React from 'react';
import styled from 'styled-components/native';
import {primaryColor} from '../assets/styles/Colors';

const Button = (props) => {
  return (
    <BotaContainer>
      <BotaoTexto>{props.texto}</BotaoTexto>
    </BotaContainer>
  );
};

const BotaContainer = styled.TouchableHighlight`
  width: 100%;
  height: 55px;
  background: ${primaryColor};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const BotaoTexto = styled.Text`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  color: #222;
  font-weight: 700;
  font-size: 16px;
`;

export default Button;
