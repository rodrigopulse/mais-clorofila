import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonIcon = (props) => {
  return (
    <ButtonIconContainer onPress={props.onPress} underlayColor="none">
      <Icon name={props.name} size={props.size} color={props.color} />
    </ButtonIconContainer>
  );
};

const ButtonIconContainer = styled.TouchableHighlight`
  width: auto;
  height: auto;
`;
export default ButtonIcon;
