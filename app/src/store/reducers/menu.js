const INITIAL_STATE = {
  show: false,
};

export default function Menu(state = INITIAL_STATE, action) {
  if (action.type === 'MENU') {
    return { ...state, show: action.show };
  }
  return state;
}
