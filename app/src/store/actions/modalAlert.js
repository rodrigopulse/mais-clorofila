export function modalAlertShow(show, message) {
  return {
    type: 'MODAL_ALERT',
    show,
    message,
  };
}
