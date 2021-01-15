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
    <MenuButtonPress onPress={props.onPress}>
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
        <MenuContainer>
          <MenuCloseContainer>
            <ButtonIcon
              name="times"
              size={22}
              color={darkGray}
              onPress={closeMenu}
            />
          </MenuCloseContainer>
          <MenuContent>
            <MenuButton
              icon="minus-circle"
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

const MenuContainer = styled.View`
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 9;
  padding: 20px;
`;
const MenuContent = styled.View`
  width: 100%;
  padding-top: 20px;
`;
const MenuIcon = styled(Icon)`
  padding-right: 20px;
`;
const MenuCloseContainer = styled.View`
  width: 100%;
  align-items: flex-end;
`;
const MenuButtonContainer = styled.View`
  flex-direction: row;
`;
const MenuButtonPress = styled.TouchableHighlight`
  padding: 10px 0;
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
