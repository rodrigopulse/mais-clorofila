import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignUpService = async (data) => {
  try {
    const response = await axios({
      url: `${API_URL}/user/register`,
      data: data,
      method: 'POST',
    });
    return response;
  } catch (err) {
    return err;
  }
};

export const SignInService = async (data) => {
  try {
    const response = await axios({
      url: `${API_URL}/user/login`,
      data: data,
      method: 'POST',
    });
    return response;
  } catch (err) {
    return err.response;
  }
};

export const TokenSave = async (token) => {
  try {
    await AsyncStorage.setItem('@MaisClorofila:token', token);
    return true;
  } catch (err) {
    return err;
  }
};

export const LogoutService = async () => {
  try {
    await AsyncStorage.removeItem('@MaisClorofila:token');
    return true;
  } catch (err) {
    return err;
  }
};
