import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';
import IconEye from '../../assets/show.png';
import IconHide from '../../assets/hide.png';
import IconLock from '../../assets/lock-alt.png';
import IconEnvelope from '../../assets/envelope.png';

import * as S from './Input.styles';

export type InputProps = {
  error?: string;
  isPassword: boolean;
  labelError?: string;
  icon: 'email' | 'lock';
} & TextInputProps;

export function Input({
  error = '',
  isPassword = false,
  labelError = '',
  icon = 'email',
  ...rest
}: InputProps) {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const {COLORS} = useTheme();

  function handleVisiblePassword() {
    setVisiblePassword(props => !props);
  }
  return (
    <S.Container>
      {icon === 'email' ? (
        <S.Icon source={IconEnvelope} />
      ) : (
        <S.Icon source={IconLock} />
      )}

      <S.InputText
        placeholder="Senha"
        secureTextEntry={visiblePassword}
        placeholderTextColor={COLORS.NEUTRAL_DARKER}
        {...rest}
      />
      {isPassword ? (
        <S.ButtonIconVisiblePassword onPress={handleVisiblePassword}>
          {visiblePassword ? (
            <S.Icon source={IconEye} />
          ) : (
            <S.Icon source={IconHide} />
          )}
        </S.ButtonIconVisiblePassword>
      ) : null}
    </S.Container>
  );
}
