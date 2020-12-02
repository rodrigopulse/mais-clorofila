import React from 'react';
import styled from 'styled-components';

// Redux
import { useSelector } from 'react-redux';

import LoadingImage from '../assets/images/loading.webp';

const Loading = () => {
  const showLoading = useSelector((state) => state.loading.show);
  return (
    <>
      {showLoading && (
        <LoadingContainer>
          <LoagindImage source={LoadingImage} />
        </LoadingContainer>
      )}
    </>
  );
};

const LoadingContainer = styled.View`
  width: 100%;
  height: 100%;
  background: #21242d;
  z-index: 10;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  position: absolute;
`;

const LoagindImage = styled.Image`
  width: 280px;
  height: 280px;
`;

export default Loading;
