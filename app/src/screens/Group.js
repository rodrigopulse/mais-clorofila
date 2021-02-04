import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// Styles
import styled from 'styled-components/native';
import { ContainerScroll, Container } from '../assets/styles/Grid';
import { darkGray } from '../assets/styles/Colors';
import { Title } from '../assets/styles/Texts';
// Components
import Divisor from '../components/Divisor';
import ButtonLink from '../components/ButtonLink';

const Group = () => {
  return (
    <ContainerScroll content>
      <Container align="center" marginBottom marginTop>
        <GroupImage
          source={require(`../assets/images/group-icons/icon-1.png`)}
        />
      </Container>
      <Divisor />
      <Container marginTop marginBottom>
        <Title>Hortaliças</Title>
      </Container>
      <Divisor />
      <Container marginTop>
        <GroupTextContainer>
          <GroupTextIcon name="leaf" size={18} color={darkGray} />
          <GroupText>Última adubação: 01/10/2020 {'\n'} (Bokashi)</GroupText>
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
      <Container marginTop marginBottom>
        <Container marginBottom>
          <Title>Histórico de Adubação</Title>
        </Container>
        <HistoryContent>
          <HistoryText>01-09-2020 (Bokashi)</HistoryText>
          <HistoryText>01-09-2020 (Bokashi)</HistoryText>
          <HistoryText>01-09-2020 (Bokashi)</HistoryText>
          <HistoryText>01-09-2020 (Bokashi)</HistoryText>
        </HistoryContent>
      </Container>
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
  width: 100%;
  font-size: 14px;
  color: ${darkGray};
  margin-left: 10px;
`;
const GroupTextIcon = styled(Icon)`
  margin: 0;
`;
const HistoryContent = styled.View`
  width: 100%;
`;
const HistoryText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
`;

export default Group;
