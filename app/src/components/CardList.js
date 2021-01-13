import React from 'react';
// Styles
import styled from 'styled-components/native';

const CardList = (props) => {
  return (
    <CardListContainer>
      <CardListIcon
        source={require(`../assets/images/group-icons/garden.png`)}
      />
      <CardListContent>
        <CardListTitle>{props.title}</CardListTitle>
        {props.text.map((item, index) => (
          <CardListText key={index}>{item.text}</CardListText>
        ))}
      </CardListContent>
    </CardListContainer>
  );
};

const CardListContainer = styled.View`
  width: 100%;
  height: 80px;
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  flex-direction: row;
  margin-bottom: 10px;
`;

const CardListIcon = styled.Image`
  width: 55px;
  height: 55px;
`;

const CardListContent = styled.View`
  height: auto;
  padding-left: 15px;
`;

const CardListTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

const CardListText = styled.Text`
  font-size: 12px;
`;
export default CardList;
