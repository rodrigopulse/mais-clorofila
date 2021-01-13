import React from 'react';
import styled from 'styled-components/native';
const IconMenuHamburguer = (props) => {
  return (
    <ButtonMenuHamburguer onPress={props.onPress} underlayColor="none">
      <IconMenuHamburguerContainer>
        <IconContentHamburguer />
        <IconContentHamburguer />
        <IconContentHamburguer />
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
const IconContentHamburguer = styled.View`
  width: 100%;
  height: 2px;
  background: #000;
`;
export default IconMenuHamburguer;
