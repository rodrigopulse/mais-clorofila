import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

// Syles
import {ContainerScroll, ContainerImage} from '../assets/styles/Grid';
import {ContainerInput} from '../assets/styles/Form';
import {secondaryColor} from '../assets/styles/Colors';

// Components
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

// Images
import BgImage from '../assets/images/bg-login.png';

const onSubmit = (email, password) => {
  console.log('teste: ', email, password);
};

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <ContainerScroll>
      <ContainerImage source={BgImage}>
        <ContentLogin>
          <TitleLogin>Cadastrar</TitleLogin>
          <SubtitleLogin>
            Cadastre-se grátis e use sem se preocupar
          </SubtitleLogin>
          <ContainerInput>
            <Input
              placeholder="seu nome"
              autoCapitalize="words"
              type="name"
              value={name}
              onChange={(input) => {
                setName(input);
              }}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="seu e-mail"
              autoCapitalize="none"
              type="email"
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
              type="password"
              secureTextEntry={true}
              value={password}
              onChange={(input) => {
                setPassword(input);
              }}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="repita sua senha"
              autoCapitalize="none"
              type="password"
              secureTextEntry={true}
              value={passwordConfirm}
              onChange={(input) => {
                setPasswordConfirm(input);
              }}
            />
          </ContainerInput>
          <ContainerInput>
            <Button
              text="Cadastrar"
              onPress={() => {
                onSubmit(name, email, password, passwordConfirm);
              }}
            />
          </ContainerInput>
        </ContentLogin>
        <FooterLogin>
          <FooterText>Já tem conta?</FooterText>
          <ButtonLink
            text="Login"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </FooterLogin>
      </ContainerImage>
    </ContainerScroll>
  );
};

const TitleLogin = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${secondaryColor};
`;

const SubtitleLogin = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${secondaryColor};
  margin-bottom: 35px;
`;

const ContentLogin = styled.View`
  width: ${Dimensions.get('window').width}px;
  max-width: 360px;
  height: ${Dimensions.get('window').height - 150}px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 20px;
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

export default Register;
