import { combineReducers } from 'redux';

import loading from './loading';
import modalAlert from './modalAlert';
import user from './user';

export default combineReducers({
  loading,
  modalAlert,
  user,
});
