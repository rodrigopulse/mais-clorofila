import React from 'react';
import { navigate } from '../services/RootNavigationService';
// Styles
import styled from 'styled-components/native';
import { darkGray } from '../assets/styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
// Components
import ButtonIcon from './ButtonIcon';
// Services
import { LogoutService } from '../services/UserService';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { menuOpenAction } from '../store/actions/menu';
import { loggedAction } from '../store/actions/user';

const MenuButton = (props) => {
  return (
    <MenuButtonPress onPress={props.onPress} underlayColor="#e0e0e0">
      <MenuButtonContainer>
        <MenuIcon name={props.icon} size={22} color={darkGray} />
        <MenuButtonText>{props.text}</MenuButtonText>
      </MenuButtonContainer>
    </MenuButtonPress>
  );
};
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
  const goToScreen = (e) => {
    closeMenu();
    navigate(e);
  };

  return (
    <>
      {showMenu && (
        <MenuContainer
          underlayColor="rgba(0, 0, 0, 0.4)"
          onPress={() => {
            closeMenu();
          }}
        >
          <MenuContent>
            <MenuCloseContainer>
              <ButtonIcon
                name="times"
                size={22}
                color={darkGray}
                onPress={closeMenu}
              />
            </MenuCloseContainer>
            <MenuButton
              icon="home"
              text="Home"
              onPress={() => goToScreen('Home')}
            />
            <MenuButton icon="minus-circle" text="Sair" onPress={logout} />
          </MenuContent>
        </MenuContainer>
      )}
    </>
  );
};

const MenuContainer = styled.TouchableHighlight`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0.4);
`;
const MenuContent = styled.View`
  width: 70%;
  height: 100%;
  background: #fff;
`;
const MenuIcon = styled(Icon)`
  padding-right: 20px;
`;
const MenuCloseContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  padding-right: 15px;
  padding-top: 15px;
`;
const MenuButtonContainer = styled.View`
  flex-direction: row;
`;
const MenuButtonPress = styled.TouchableHighlight`
  padding: 10px 20px;
  width: 100%;
  height: auto;
`;
const MenuButtonText = styled.Text`
  width: auto;
  font-size: 16px;
  font-weight: 700;
  color: ${darkGray};
`;

export default Menu;
