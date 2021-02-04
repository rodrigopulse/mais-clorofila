import React from 'react';
import { Icons } from './Icons';

// Services
import { dateBrasil } from '../services/DateService';
// Styles
import styled from 'styled-components/native';

const CardList = (props) => {
  console.log(typeof icon);
  return (
    <CardListPress onPress={props.onPress}>
      <CardListContainer>
        <CardListIcon source={Icons[props.icon]} />
        <CardListContent>
          <CardListTitle>{props.title}</CardListTitle>
          {props.lastFertilization && (
            <CardListText>
              Última adubação: {dateBrasil(props.lastFertilization)}
            </CardListText>
          )}
          {props.dateLastWatering && (
            <CardListText>
              Última adubação: {dateBrasil(props.dateLastWatering)}
            </CardListText>
          )}
        </CardListContent>
      </CardListContainer>
    </CardListPress>
  );
};

const CardListPress = styled.TouchableHighlight`
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
`;
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
