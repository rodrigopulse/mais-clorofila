const INITIAL_STATE = {
  logged: false,
};

export default function user(state = INITIAL_STATE, action) {
  if (action.type === 'LOGGED') {
    return { ...state, logged: action.state };
  }
  return state;
}
