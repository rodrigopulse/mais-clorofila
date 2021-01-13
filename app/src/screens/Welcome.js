import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Styles
import { Container, ContainerImage } from '../assets/styles/Grid';

// Redux
import { useDispatch } from 'react-redux';
import { loggedAction } from '../store/actions/user';

// Image
import BgImage from '../assets/images/bg-login.png';

const Welcome = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    logged();
  }, []);
  const logged = async () => {
    try {
      const token = await AsyncStorage.getItem('@MaisClorofila:token');
      if (token !== null) {
        dispatch(loggedAction(true));
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
