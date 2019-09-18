import React from 'react';
import {ActivityIndicator} from 'react-native';

import {color1} from '~/helpers/colors';
import {Container, Text} from './style';

const Loading = () => (
  <Container>
    <ActivityIndicator color={color1} size="large" />
    <Text textColor={color1}>Carregando...</Text>
  </Container>
);

export default Loading;
