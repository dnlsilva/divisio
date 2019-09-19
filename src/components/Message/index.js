import React from 'react';
import PropTypes from 'prop-types';
import Balloon from 'react-native-balloon';

import {green, blue} from '~/helpers/colors';

import {Container, WordIcon, WordText, TextContainer, Text} from './styles';

const Message = ({message: {direction, value}, name}) => {
  const inc = direction === 'incoming';
  return (
    <Container inc={inc}>
      {inc && (
        <WordIcon>
          <WordText>{name && name.charAt(0)}</WordText>
        </WordIcon>
      )}
      <Balloon
        triangleOffset="50%"
        backgroundColor={inc ? green : blue}
        borderColor="transparent"
        borderRadius={10}
        triangleSize={inc ? 5 : 1}
        triangleDirection={inc ? 'left' : 'right'}>
        <TextContainer>
          <Text>{value}</Text>
        </TextContainer>
      </Balloon>
    </Container>
  );
};

Message.propTypes = {
  message: PropTypes.oneOfType(PropTypes.object),
  name: PropTypes.string,
};

Message.defaultProps = {
  message: {direction: 'incoming', value: ''},
  name: '',
};

export default Message;
