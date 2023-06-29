import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import IconEye from '../../assets/show.png';
import IconHide from '../../assets/hide.png';
import IconLock from '../../assets/lock-alt.png';

import * as S from './Input.styles';

export type InputProps = {
  error?: string;
  labelError?: string;
} & TextInputProps;

export function Input({error = '', labelError = '', ...rest}: InputProps) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const {COLORS} = useTheme();

  function handleVisiblePassword() {
    setVisiblePassword(props => !props);
  }
  return (
    <S.Container>
      <S.Icon source={IconLock} />
      <S.InputText
        placeholder="Senha"
        secureTextEntry={visiblePassword}
        placeholderTextColor={COLORS.NEUTRAL_DARKER}
        {...rest}
      />
      <S.ButtonIconVisiblePassword onPress={handleVisiblePassword}>
        {visiblePassword ? (
          <S.Icon source={IconEye} />
        ) : (
          <S.Icon source={IconHide} />
        )}
      </S.ButtonIconVisiblePassword>
    </S.Container>
  );
}
