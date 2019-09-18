import styled from 'styled-components/native';

import {color1, color4} from '~/helpers/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: ${props => (props.inc ? 'flex-end' : 'flex-start')};
  justify-content: ${props => (props.inc ? 'flex-start' : 'flex-end')};
  margin-left: ${props => (props.inc ? 10 : 0)};
  margin-right: ${props => (props.inc ? 0 : 10)};
`;

export const WordIcon = styled.View`
  height: 35;
  width: 35;
  border-radius: 20;
  background-color: ${color1};
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const WordText = styled.Text`
  color: ${color4};
  font-size: 25;
  font-weight: bold;
`;

export const TextContainer = styled.View`
  padding: 8px;
  align-content: center;
  justify-content: center;
`;
export const Text = styled.Text`
  font-size: 15;
  color: black;
`;
