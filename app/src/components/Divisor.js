import React from 'react';
import styled from 'styled-components/native';
import { ligthGray } from '../assets/styles/Colors';

const Divisor = () => {
  return <DivisorContainer />;
};

const DivisorContainer = styled.View`
  width: 100%;
  height: 1px;
  background: ${ligthGray};
`;

export default Divisor;
