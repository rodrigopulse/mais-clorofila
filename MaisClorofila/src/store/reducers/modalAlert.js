const INITIAL_STATE = {
  show: false,
  message: '',
};

export default function modalAlert(state = INITIAL_STATE, action) {
  if (action.type === 'MODAL_ALERT') {
    return {...state, show: action.show, message: action.message};
  }
  return state;
}
