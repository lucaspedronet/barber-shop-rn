import React from 'react';
import {useTheme} from 'styled-components/native';
import * as S from './LoginScreen.styles';

import {Input} from '../../components/Input/Input';
import Logo from '../../assets/logo.png';

export function LoginScreen() {
  const {COLORS} = useTheme();

  return (
    <S.Container>
      <S.ImageLogo source={Logo} />
      <S.Title>Boas vindas de volta, Las Vegas Barber Shop</S.Title>
      <S.SubTitle>Informe sua senha para acessar o app</S.SubTitle>

      <Input />
    </S.Container>
  );
}
