import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
// Services
import {
  SignUpService,
  SignInService,
  TokenSave,
} from '../services/UserService';

// Redux
import { useDispatch } from 'react-redux';
import { loadingAction } from '../store/actions/loading';
import { modalAlertShow } from '../store/actions/modalAlert';
import { loggedAction } from '../store/actions/user';

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

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Preencha com um nome válido')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Preencha com um e-mail valido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
  passwordConfirm: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'As senhas não são iguais'),
});

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const login = (email, password) => {
    SignInService({
      email: email,
      password: password,
    })
      .then((res) => {
        TokenSave(res.data.token).then(() => {
          dispatch(loggedAction(true));
          navigation.navigate('Home');
          dispatch(loadingAction(false));
        });
      })
      .catch(() => {
        dispatch(loadingAction(false));
        navigation.navigate('SignIn');
      });
  };
  return (
    <ContainerScroll>
      <ContainerImage source={BgImage}>
        <ContentLogin>
          <TitleLogin>CADASTRAR</TitleLogin>
          <SubtitleLogin>Crie sua conta grátis</SubtitleLogin>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              passwordConfirm: '',
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
              dispatch(loadingAction(true));
              SignUpService(values)
                .then((res) => {
                  if (res.status === 200) {
                    login();
                  } else if (
                    res.response.status === 400 &&
                    res.response.data.error === 11000
                  ) {
                    dispatch(loadingAction(false));
                    dispatch(modalAlertShow(true, 'Usuário já existe'));
                  } else {
                    dispatch(loadingAction(false));
                    dispatch(
                      modalAlertShow(
                        true,
                        'Ocorreu um erro, tente novamente mais tarde',
                      ),
                    );
                  }
                })
                .catch((err) => {
                  console.log(err);
                  dispatch(loadingAction(false));
                  dispatch(
                    modalAlertShow(
                      true,
                      'Ocorreu um erro, tente novamente mais tarde',
                    ),
                  );
                });
            }}
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
                  {errors.password && touched.password && (
                    <ErrorInput>{errors.password}</ErrorInput>
                  )}
                </ContainerInput>
                <ContainerInput>
                  <Input
                    placeholder="repita sua senha"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={values.passwordConfirm}
                    onChange={handleChange('passwordConfirm')}
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <ErrorInput>{errors.passwordConfirm}</ErrorInput>
                  )}
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
              navigation.navigate('SignIn');
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
  padding-top: 50px;
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

export default SignUp;
