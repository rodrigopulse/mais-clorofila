import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Form
import { Formik } from 'formik';
import * as Yup from 'yup';

// Syles
import { ContainerScroll, ContainerImage } from '../assets/styles/Grid';
import { ContainerInput, ErrorInput } from '../assets/styles/Form';

// Components
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';

// Images
import BgImage from '../assets/images/bg-login.png';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Preencha com um nome válido')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Preencha com um e-mail valido')
    .required('Campo obrigatório'),
});

const Register = ({ navigation }) => {
  return (
    <ContainerScroll>
      <ContainerImage source={BgImage}>
        <ContentLogin>
          <TitleLogin>Cadastrar</TitleLogin>
          <SubtitleLogin>Crie sua contra grátis</SubtitleLogin>
          <Formik
            initialValues={{ name: '', email: '' }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => console.log('values: ', values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <ContainerInput>
                  <Input
                    placeholder="seu nome"
                    autoCapitalize="words"
                    value={values.name}
                    onChange={handleChange('name')}
                  />
                  {errors.name && touched.name && (
                    <ErrorInput>{errors.name}</ErrorInput>
                  )}
                </ContainerInput>
                <ContainerInput>
                  <Input
                    placeholder="seu e-mail"
                    autoCapitalize="none"
                    type="email-address"
                    value={values.email}
                    onChange={handleChange('email')}
                  />
                  {errors.email && touched.email && (
                    <ErrorInput>{errors.email}</ErrorInput>
                  )}
                </ContainerInput>
                <ContainerInput>
                  <Input
                    placeholder="sua senha"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={values.password}
                    onChange={handleChange('password')}
                  />
                </ContainerInput>
                <ContainerInput>
                  <Input
                    placeholder="repita sua senha"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={values.passwordConfirm}
                    onChange={handleChange('passwordConfirm')}
                  />
                </ContainerInput>
                <ContainerInput>
                  <Button text="Cadastrar" onPress={handleSubmit} />
                </ContainerInput>
              </>
            )}
          </Formik>
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
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;

const SubtitleLogin = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
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
