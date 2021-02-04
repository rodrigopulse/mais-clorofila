import React, { useEffect, useState } from 'react';

// Services
import { getAllUserId } from '../services/GroupService';

// Styles
import { ContainerScroll, Container } from '../assets/styles/Grid';
import { Title } from '../assets/styles/Texts';

// Components
import CardList from '../components/CardList';
const Home = ({ navigation }) => {
  const pressCard = () => {
    navigation.navigate('Group');
  };
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    getAllUserId()
      .then((res) => {
        setGroups(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <ContainerScroll content>
      <Container marginTop marginBottom>
        <Title>Meus Grupos</Title>
      </Container>
      {groups &&
        groups.map((res, index) => (
          <CardList
            key={index}
            onPress={pressCard}
            title={res.name}
            lastFertilization={res.dateLastFertilization}
            dateLastWatering={res.dateLastWatering}
            icon={res.icon}
          />
        ))}
    </ContainerScroll>
  );
};

export default Home;
