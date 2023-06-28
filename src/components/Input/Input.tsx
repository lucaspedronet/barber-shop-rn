import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import IconEye from '../../assets/show.png';
import IconLock from '../../assets/lock-alt.png';

import * as S from './Input.styles';

export type InputProps = {
  error?: string;
  isPassword?: boolean;
  labelError?: string;
} & TextInputProps;

export function Input({error, isPassword, labelError, ...rest}: InputProps) {
  const {COLORS} = useTheme();
  return (
    <S.Container>
      <S.Icon source={IconLock} />
      <S.InputText
        placeholder="Senha"
        placeholderTextColor={COLORS.NEUTRAL_DARKER}
        {...rest}
      />
      <S.Icon source={IconEye} />
    </S.Container>
  );
}
