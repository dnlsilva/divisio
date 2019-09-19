import PropTypes from 'prop-types';
import React from 'react';
import {View, StyleSheet, Platform, TouchableOpacity} from 'react-native';

const Card = ({
  children,
  elevation,
  opacity,
  cornerRadius,
  backgroundColor,
  action,
}) => {
  const cardStyle = Platform.select({
    ios: () =>
      StyleSheet.create({
        card: {
          shadowRadius: elevation,
          shadowOpacity: opacity,
          shadowOffset: {width: 0, height: elevation},
          borderRadius: cornerRadius,
          backgroundColor: backgroundColor,
          width: '95%',
          minHeight: 60,
          flex: 1,
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
    android: () =>
      StyleSheet.create({
        card: {
          elevation,
          borderRadius: cornerRadius,
          backgroundColor: backgroundColor,
          width: '95%',
          minHeight: 60,
          flex: 1,
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }),
  })();

  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={action}>
      <View style={cardStyle.card}>{children}</View>
    </TouchableOpacity>
  );
};

Card.propTypes = {
  backgroundColor: PropTypes.string,
  elevation: PropTypes.number,
  cornerRadius: PropTypes.number,
  opacity: PropTypes.number,
  action: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: '#ffffff',
  elevation: 3,
  cornerRadius: 5,
  opacity: 0.5,
  action: () => {},
};

export default Card;
