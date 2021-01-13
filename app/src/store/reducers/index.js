import { combineReducers } from 'redux';

import loading from './loading';
import modalAlert from './modalAlert';
import user from './user';
import menu from './menu';

export default combineReducers({
  loading,
  modalAlert,
  user,
  menu,
});
