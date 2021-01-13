import React from 'react';

// Styles
import { ContainerScroll } from '../assets/styles/Grid';
import { Title } from '../assets/styles/Texts';

// Components
import CardList from '../components/CardList';
const Home = () => {
  return (
    <ContainerScroll content>
      <Title>Meus Grupos</Title>
      <CardList
        title="Hortaliças"
        text={[
          {
            text: 'Última adubação: 01/10/2020',
          },
          {
            text: 'Última rega: 02 -10-2020',
          },
        ]}
      />
    </ContainerScroll>
  );
};

export default Home;
