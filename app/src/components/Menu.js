import React from 'react';
import styled from 'styled-components/native';
import ButtonIcon from './ButtonIcon';
import { darkGray } from '../assets/styles/Colors';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { menuOpenAction } from '../store/actions/menu';

const Menu = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.show);
  const closeMenu = () => {
    dispatch(menuOpenAction(false));
  };
  return (
    <>
      {showMenu && (
        <MenuContainer>
          <MenuCloseContainer>
            <ButtonIcon
              name="times"
              size={22}
              color={darkGray}
              onPress={closeMenu}
            />
          </MenuCloseContainer>
        </MenuContainer>
      )}
    </>
  );
};

const MenuContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 9;
  padding: 20px;
`;
const MenuCloseContainer = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export default Menu;
