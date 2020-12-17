import axios from 'axios';
import { API_URL } from '@env';

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
