import React from 'react';
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
          underlineColorAndroid="transparent"
          multiline
          value={text}
          onChangeText={textCallback}
          //TODO
          // onContentSizeChange={this.heightChange.bind(this)}
          placeholder={'Digite uma mensagem'}
        />
      </TextInputContainer>
      <SendContainer>
        <SendIcon onPress={text.length ? sendCallback : () => {}}>
          {sending ? (
            <ActivityIndicator size="large" color={color4} />
          ) : (
            <StyledIcon name="rocket" disabled={!!text.length} />
          )}
        </SendIcon>
      </SendContainer>
    </Container>
  );
};

export default MessageInput;
