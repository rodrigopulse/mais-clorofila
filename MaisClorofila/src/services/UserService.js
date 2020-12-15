import axios from 'axios';
import { API_URL } from '@env';

export default class UserService {
  SignUp = async (data) => {
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

  url = () => {
    return API_URL;
  };
}
