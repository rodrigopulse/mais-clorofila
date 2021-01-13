import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { darkGray } from '../assets/styles/Colors';

const IconMenuHamburguer = (props) => {
  return (
    <ButtonMenuHamburguer onPress={props.onPress} underlayColor="none">
      <IconMenuHamburguerContainer>
        <Icon name="bars" size={22} color={darkGray} />
      </IconMenuHamburguerContainer>
    </ButtonMenuHamburguer>
  );
};

const ButtonMenuHamburguer = styled.TouchableHighlight`
  width: 26px;
  height: 17px;
`;
const IconMenuHamburguerContainer = styled.View`
  width: 26px;
  height: 17px;
  justify-content: space-between;
`;
export default IconMenuHamburguer;
