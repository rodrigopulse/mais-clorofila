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
      const token = await AsyncStorage.getItem('@MaisClorofila:token');
      if (token !== null) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('SignUp');
      }
    } catch (token) {
      navigation.navigate('SignUp');
    }
  };
  return (
    <Container>
      <ContainerImage source={BgImage} />
    </Container>
  );
};

export default Welcome;
