import axios from 'axios';
// import { API_URL } from '@env';

export const SignUpService = async (data) => {
  try {
    const response = await axios({
      url: `http://192.168.1.105:8082/user/register`,
      data: data,
      method: 'POST',
    });
    return response;
  } catch (err) {
    return err;
  }
};
