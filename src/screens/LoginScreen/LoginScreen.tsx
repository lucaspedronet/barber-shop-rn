import React, {useState} from 'react';

import {api} from '../../services/api';
import {Input} from '../../components/Input/Input';
import {Button} from '../../components/Button/Button';
import Logo from '../../assets/logo.png';

import * as S from './LoginScreen.styles';

export function LoginScreen() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleForgotPassword() {
    console.log('pressionei o texto');
  }

  async function login() {
    try {
      console.log({ok: 'oky'});
      const response = await api.post('/sessions/providers', {email, password});

      console.log({data: response.data});
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <S.Container>
      <S.ImageLogo source={Logo} />
      <S.Title>Boas vindas de volta, Las Vegas Barber Shop</S.Title>
      <S.SubTitle>Informe sua senha para acessar o app</S.SubTitle>

      <S.Form>
        <Input
          isPassword={false}
          icon={'email'}
          placeholder="E-mail da empresa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          isPassword
          icon={'lock'}
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={login} />

        <S.ForgotPassword onPress={handleForgotPassword}>
          Esqueci minha senha
        </S.ForgotPassword>
      </S.Form>
    </S.Container>
  );
}
