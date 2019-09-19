import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {color3, color4} from '~/helpers/colors';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const TextInputContainer = styled.View`
  flex: 12;
  flex-direction: row;
  background-color: ${color3};
  padding: 5px;
  border-top-right-radius: 5;
`;

export const TextInput = styled.TextInput`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8;
  font-size: 18;
  width: 100%;
`;

export const SendContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

export const SendIcon = styled.TouchableOpacity`
  background-color: transparent;
  justify-content: center;
  background-color: ${color3};
  align-items: center;
  width: 45;
  height: 45;
  border-radius: 5;
  margin-right: 5;
`;

export const StyledIcon = styled(Icon)`
  font-size: 27;
  color: ${color4};
`;
