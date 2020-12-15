import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Styles
import { Container, ContainerImage } from '../assets/styles/Grid';

// Image
import BgImage from '../assets/images/bg-login.png';

const Welcome = ({ navigation }) => {
  useEffect(() => {
    logged();
  }, []);
  const logged = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log(token);
      } else {
        navigation.navigate('SignIn');
      }
    } catch (token) {
      navigation.navigate('SignIn');
    }
  };
  return (
    <Container>
      <ContainerImage source={BgImage} />
    </Container>
  );
};

export default Welcome;
