import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  welcome: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Main = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Olá Mundo</Text>
  </View>
);

export default Main;
