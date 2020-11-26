import React from 'react';
import styled from 'styled-components';

// Redux
import {useDispatch} from 'react-redux';
import {modalAlertShow} from '../store/actions/modalAlert';
import {useSelector} from 'react-redux';

// Components
import ButtonLink from '../components/ButtonLink';

// Styles
import {darkText} from '../assets/styles/Colors';

const ModalAlert = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.modalAlert.show);
  const closeModal = () => {
    dispatch(modalAlertShow(false, ''));
  };
  return (
    <>
      {showModal && (
        <ModalAlertContainer>
          <ModalAlertContent>
            <ModalAlertMessage>Mensagem</ModalAlertMessage>
            <ButtonLink
              text="ok"
              onPress={() => {
                closeModal();
              }}
            />
          </ModalAlertContent>
        </ModalAlertContainer>
      )}
    </>
  );
};

const ModalAlertContainer = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalAlertContent = styled.View`
  width: 90%;
  height: auto;
  padding: 20px;
  background: #fff;
  border-radius: 15px;
`;

const ModalAlertMessage = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${darkText};
  margin-bottom: 20px;
`;

export default ModalAlert;
