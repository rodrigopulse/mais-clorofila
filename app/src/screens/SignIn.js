import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { SignInService, TokenSave } from '../services/UserService';

// Styles
import { Container, ContainerImage } from '../assets/styles/Grid';
import { ContainerInput } from '../assets/styles/Form';

// Components
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

// Redux
import { useDispatch } from 'react-redux';
import { modalAlertShow } from '../store/actions/modalAlert';
import { loadingAction } from '../store/actions/loading';

// Images
import BgImage from '../assets/images/bg-login.png';
import LogoImagem from '../assets/images/logo-login.png';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (email, password) => {
    dispatch(loadingAction(true));
    const data = {
      email: email,
      password: password,
    };
    SignInService(data)
      .then((res) => {
        dispatch(loadingAction(false));
        if (res.data.token) {
          TokenSave(res.data.token).then(() => {
            navigation.navigate('Home');
          });
        } else {
          dispatch(modalAlertShow(true, 'Usuário e/ou senha incorretos'));
        }
      })
      .catch(() => {
        dispatch(loadingAction(false));
        dispatch(modalAlertShow(true, 'Usuário e/ou senha incorretos'));
      });
  };

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
              navigation.navigate('SignUp');
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

export default SignIn;
