import React from 'react';
import styled from 'styled-components/native';
import { primaryColor, darkGray } from '../assets/styles/Colors';
// Components
import ButtonIcon from './ButtonIcon';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { menuOpenAction } from '../store/actions/menu';

const Header = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const openMenu = () => {
    dispatch(menuOpenAction(true));
  };
  return (
    <>
      {logged && (
        <HeaderContainer>
          <ButtonIcon
            name="bars"
            size={22}
            color={darkGray}
            onPress={openMenu}
          />
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
