import styled from 'styled-components/native';

import {color1, color2, color3, blue, red} from '~/helpers/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Divisory = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background-color: ${color2};
  width: 90%;
  max-width: 90%;
  height: 50px;
  border-radius: 5px;
  color: ${color1};
  font-size: 17;
`;

export const SendButton = styled.Button`
  background: ${blue};
`;

export const ButtonContainer = styled.View`
  margin-top: 30;
`;

export const TextError = styled.Text`
  color: ${red};
  font-size: 13;
`;

export const TextLabel = styled.Text`
  color: ${color3};
  font-size: 15;
  margin-bottom: 5;
`;
