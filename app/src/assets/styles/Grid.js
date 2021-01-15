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
  height: auto;
  z-index: 1;
  padding: ${(props) => (props.content ? '20px' : 0)};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  margin-top: ${(props) => (props.marginTop ? '25px' : '0')};
  margin-bottom: ${(props) => (props.marginBottom ? '25px' : '0')};
`;

export const ContainerImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  min-height: ${Dimensions.get('window').height}px;
`;
