const ESTADO_INICIAL = {
  show: false,
};

export default function carregando(state = ESTADO_INICIAL, action) {
  if (action.type === 'LOADING') {
    return {...state, show: action.show};
  }
  return state;
}
