import axios from 'axios';
import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllUserId = async () => {
  try {
    const token = await AsyncStorage.getItem('@MaisClorofila:token');
    const response = await axios({
      url: `${API_URL}/group/get`,
      headers: { 'x-access-token': token },
      method: 'GET',
    });
    return response;
  } catch (error) {
    return error;
  }
};
