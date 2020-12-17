import { combineReducers } from 'redux';

import loading from './loading';
import modalAlert from './modalAlert';

export default combineReducers({
  loading,
  modalAlert,
});
