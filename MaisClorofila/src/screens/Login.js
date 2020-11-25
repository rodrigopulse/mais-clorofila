import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// Syles
import {Container} from '../assets/styles/Grid';
import {ContainerInput} from '../assets/styles/Form';

// Components
import Input from '../components/Input';

const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <ContentLogin>
        <ContainerInput>
          <Input
            placeholder="seu e-mail"
            autoCapitalize="none"
            type="email-address"
            value={email}
            onChange={(input) => {
              setEmail(input);
            }}
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="sua senha"
            autoCapitalize="none"
            secureTextEntry={true}
          />
        </ContainerInput>
      </ContentLogin>
    </Container>
  );
};

const ContentLogin = styled.View`
  width: ${Dimensions.get('window').width}px;
  max-width: 316px;
  height: ${Dimensions.get('window').height - 115}px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export default Login;
