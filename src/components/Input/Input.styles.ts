import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 48px;
  border-radius: 22px;
  background-color: ${({theme}) => theme.COLORS.NEUTRAL_DARK_DEFAULT};
`;

export const InputText = styled.TextInput`
  flex: 1;

  height: 48px;
  margin: 0 12px;
  font-size: 16px;
  line-height: 22px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Icon = styled.Image``;

export const ButtonIconVisiblePassword = styled.TouchableOpacity``;
