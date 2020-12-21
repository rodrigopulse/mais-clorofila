import React from 'react';
import { LogoutService } from '../services/UserService';
import Button from '../components/Button';

// Styles
import { Container } from '../assets/styles/Grid';

const Home = ({ navigation }) => {
  const logout = () => {
    LogoutService().then(() => {
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
