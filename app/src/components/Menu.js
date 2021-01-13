import React from 'react';
import { navigate } from '../services/RootNavigationService';
// Styles
import styled from 'styled-components/native';
import { darkGray } from '../assets/styles/Colors';
// Components
import Button from '../components/Button';
import ButtonIcon from './ButtonIcon';
// Services
import { LogoutService } from '../services/UserService';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { menuOpenAction } from '../store/actions/menu';
import { loggedAction } from '../store/actions/user';

const Menu = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.show);
  const closeMenu = () => {
    dispatch(menuOpenAction(false));
  };
  const logout = () => {
    LogoutService().then(() => {
      closeMenu();
      dispatch(loggedAction(false));
      navigate('SignIn');
    });
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
          <Button text="Logout" onPress={logout} />
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
