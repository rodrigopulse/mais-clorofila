const INITIAL_STATE = {
  show: false,
};

export default function loading(state = INITIAL_STATE, action) {
  if (action.type === 'LOADING') {
    return { ...state, show: action.show };
  }
  return state;
}
