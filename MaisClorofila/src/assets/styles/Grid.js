import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {primaryColor} from './Colors';

export const ContainerScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: ${primaryColor};
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  min-height: ${Dimensions.get('window').height}px;
`;
