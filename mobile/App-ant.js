import React, {Componet} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Componet {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Smartex</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
  },
});
