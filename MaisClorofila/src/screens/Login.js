import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// Syles
import {Container, ContainerImage} from '../assets/styles/Grid';
import {ContainerInput} from '../assets/styles/Form';

// Components
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

// Images
import BgImage from '../assets/images/bg-login.png';
import LogoImagem from '../assets/images/logo-login.png';

const onSubmit = (email, password) => {
  console.log('teste: ', email, password);
};

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <ContainerImage source={BgImage}>
        <ContentLogin>
          <LogoLogin source={LogoImagem} />
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
              value={password}
              onChange={(input) => {
                setPassword(input);
              }}
            />
          </ContainerInput>
          <ContainerInput>
            <Button
              text="Entrar"
              onPress={() => {
                onSubmit(email, password);
              }}
            />
          </ContainerInput>
        </ContentLogin>
        <FooterLogin>
          <FooterText>Ainda não tem conta?</FooterText>
          <ButtonLink
            text="Cadastrar"
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
        </FooterLogin>
      </ContainerImage>
    </Container>
  );
};

const ContentLogin = styled.View`
  width: ${Dimensions.get('window').width}px;
  max-width: 360px;
  height: ${Dimensions.get('window').height - 150}px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;
`;

const LogoLogin = styled.Image`
  width: 73px;
  height: 116px;
  margin-bottom: 40px;
`;

const FooterLogin = styled.View`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;
`;

export default Login;
