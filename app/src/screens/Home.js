import React from 'react';
import { LogoutService } from '../services/UserService';
import Button from '../components/Button';

// Redux
import { useDispatch } from 'react-redux';
import { loggedAction } from '../store/actions/user';

// Styles
import { Container } from '../assets/styles/Grid';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const logout = () => {
    LogoutService().then(() => {
      dispatch(loggedAction(false));
      navigation.navigate('SignIn');
    });
  };
  return (
    <Container>
      <Button text="Logout" onPress={logout} />
    </Container>
  );
};

export default Home;
