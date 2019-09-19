import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';

import {color4} from '~/helpers/colors';

import {
  Container,
  TextInputContainer,
  TextInput,
  SendContainer,
  SendIcon,
  StyledIcon,
} from './style';

const MessageInput = ({sending, textCallback, sendCallback, text}) => {
  return (
    <Container>
      <TextInputContainer>
        <TextInput
          testID="textCallback"
          underlineColorAndroid="transparent"
          multiline
          value={text}
          onChangeText={textCallback}
          placeholder={'Digite uma mensagem'}
        />
      </TextInputContainer>
      <SendContainer>
        <SendIcon
          testID="sendCallback"
          onPress={text.length ? sendCallback : () => {}}>
          {sending ? (
            <ActivityIndicator size="large" color={color4} />
          ) : (
            <StyledIcon name="send" disabled={!!text.length} />
          )}
        </SendIcon>
      </SendContainer>
    </Container>
  );
};

MessageInput.propTypes = {
  sending: PropTypes.bool,
  textCallback: PropTypes.func,
  sendCallback: PropTypes.func,
  text: PropTypes.string,
};

MessageInput.defaultProps = {
  sending: false,
  textCallback: () => {},
  sendCallback: () => {},
  text: '',
};

export default MessageInput;
