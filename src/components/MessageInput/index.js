import React from 'react';
import {View, TextInput} from 'react-native';

const index = () => {
  const enviarMensagemVerificador = () => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          width: 45,
          height: 45,
          marginRight: 5,
        }}>
        {this.state.sendVerify === 0 ? (
          <Spinner color={color4} />
        ) : (
          <Icon
            name="send"
            disabled={
              this.state.mensagem.length + this.state.tempFiles.length === 0
            }
            style={
              this.state.mensagem.length + this.state.tempFiles.length === 0
                ? {fontSize: 27, color: 'grey'}
                : {fontSize: 27, color: color4}
            }
            onPress={() => {
              this.enviarMensagem();
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flex: 12,
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: color4,
          borderRadius: 5,
          marginLeft: 3,
        }}>
        <View
          style={{
            flex: 8,
            justifyContent: 'center',
            paddingHorizontal: 4,
            paddingVertical: 4,
          }}>
          <TextInput
            underlineColorAndroid="transparent"
            multiline
            value={this.state.mensagem}
            onChangeText={text => {
              this.setState({mensagem: text});
            }}
            onFocus={() => {
              this.showDetalhesAtividade();
            }}
            onBlur={() => {
              this.showDetalhesAtividade();
            }}
            onContentSizeChange={this.heightChange.bind(this)}
            placeholder={
              this.state.tempFiles.length > 0 ? 'Digite uma mensagem' : ''
            }
            style={{
              backgroundColor: 'rgba(255,255,255,1)',
              borderRadius: 8,
              paddingVertical: 8,
              height: this.state.textInputHeight,
              fontSize: 18,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: '#ecf0f1',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 5,
        }}>
        {this.enviarMensagemVerificador()}
      </View>
    </View>
  );
};

export default index;
