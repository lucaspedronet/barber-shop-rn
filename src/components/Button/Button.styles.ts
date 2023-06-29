import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  height: 48px;
  width: 100%;

  padding: 12px 28px 14px 28px;

  border-radius: 24px;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const Label = styled.Text`
  font-size: 18px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  line-height: 22.6px;
  color: ${({theme}) => theme.COLORS.WHITE};
`;
