import React from 'react';
import {View, Text} from 'react-native';
import Balloon from 'react-native-balloon';

const Message = ({incoming, text}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: incoming ? 'flex-end' : 'flex-start',
          justifyContent: incoming ? 'flex-start' : 'flex-end',
        },
        incoming ? {marginLeft: 10} : {marginRight: 10},
      ]}>
      <View style={{width: 30, height: 30, borderRadius: 20}} />
      <Balloon
        triangleOffset="50%"
        backgroundColor={incoming ? '#036564' : '#d6efd3'}
        borderColor="transparent"
        borderRadius={10}
        triangleSize={incoming ? 5 : 1}
        triangleDirection={incoming ? 'left' : 'right'}>
        <View style={{padding: 8}}>
          <Text
            style={{
              marginTop: 8,
              fontSize: 15,
              color: 'black',
            }}>
            {text}
          </Text>
        </View>
      </Balloon>
    </View>
  );
};

export default Message;
