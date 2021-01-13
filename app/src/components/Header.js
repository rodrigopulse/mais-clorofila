import React from 'react';
import styled from 'styled-components/native';
import { primaryColor } from '../assets/styles/Colors';
// Components
import IconMenuHamburguer from './ButtonMenuHamburguer';
// Redux
import { useSelector } from 'react-redux';

const Header = () => {
  const logged = useSelector((state) => state.user.logged);
  const openMenuHamburguer = () => {
    console.log('teste');
  };
  return (
    <>
      {logged && (
        <HeaderContainer>
          <IconMenuHamburguer onPress={openMenuHamburguer} />
        </HeaderContainer>
      )}
    </>
  );
};

const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 25px;
  background: ${primaryColor};
  justify-content: center;
`;
export default Header;
