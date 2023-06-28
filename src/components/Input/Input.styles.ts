import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  max-height: 48px;

  padding: 12px 24px;
  border-radius: 22px;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_DARK_DEFAULT};
`;

export const InputText = styled.TextInput`
  flex: 1;

  height: 100%;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Icon = styled.Image``;
