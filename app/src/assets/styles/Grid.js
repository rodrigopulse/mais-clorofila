import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ContainerScroll = styled.ScrollView`
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: ${(props) => (props.content ? '20px' : 0)};
  z-index: 1;
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 1;
`;

export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  min-height: ${Dimensions.get('window').height}px;
`;
