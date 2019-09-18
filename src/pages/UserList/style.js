import styled from 'styled-components/native';

import {color3} from '~/helpers/colors';

export const EmptyView = styled.View`
  flex: 1;
  padding: 10px;
  align-items: center;
`;

export const EmptyText = styled.Text`
  color: ${color3};
  font-size: 17;
  font-weight: bold;
  text-align: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: center;
  padding: 10px;
`;
