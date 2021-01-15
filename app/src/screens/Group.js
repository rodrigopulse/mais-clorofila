import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// Styles
import styled from 'styled-components/native';
import { ContainerScroll, Container } from '../assets/styles/Grid';
import { darkGray } from '../assets/styles/Colors';
// Components
import Divisor from '../components/Divisor';
import ButtonLink from '../components/ButtonLink';

const Group = () => {
  return (
    <ContainerScroll content>
      <Container align="center" marginBottom marginTop>
        <GroupImage
          source={require(`../assets/images/group-icons/garden.png`)}
        />
      </Container>
      <Divisor />
      <Container marginTop>
        <GroupTextContainer>
          <GroupTextIcon name="leaf" size={18} color={darkGray} />
          <GroupText>Última adubação: 01/10/2020</GroupText>
        </GroupTextContainer>
      </Container>
      <Container marginTop>
        <GroupTextContainer>
          <GroupTextIcon name="pagelines" size={18} color={darkGray} />
          <GroupText>Próxima adubação: 01/10/2020</GroupText>
        </GroupTextContainer>
      </Container>
      <Container marginTop marginBottom>
        <ButtonLink text="Adicionar Adubo" />
      </Container>
      <Divisor />
      <Container marginTop>
        <GroupTextContainer>
          <GroupTextIcon name="tint" size={18} color={darkGray} />
          <GroupText>Última Rega: 01/10/2020</GroupText>
        </GroupTextContainer>
      </Container>
      <Container marginTop marginBottom>
        <ButtonLink text="Adicionar Rega" />
      </Container>
      <Divisor />
    </ContainerScroll>
  );
};

const GroupImage = styled.Image`
  width: 83px;
  height: 83px;
`;

const GroupTextContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const GroupText = styled.Text`
  font-size: 14px;
  color: ${darkGray};
  margin-left: 10px;
`;
const GroupTextIcon = styled(Icon)`
  margin: 0;
`;

export default Group;
