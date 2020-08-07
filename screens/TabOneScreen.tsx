import * as React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import Button from 'react-native-button';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/main4.png')}
      />
      <Text style={styles.title}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5dcca',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 50,
    height: 1,
    width: '60%',
  },
  separator2: {
    marginVertical: 20,
    height: 1,
    width: '60%',
  },
});
