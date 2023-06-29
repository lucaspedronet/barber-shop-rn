import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import * as S from './Button.styles';

export function Button({...rest}: TouchableOpacityProps) {
  return (
    <S.Container {...rest}>
      <S.Label>Acessar o app</S.Label>
    </S.Container>
  );
}
