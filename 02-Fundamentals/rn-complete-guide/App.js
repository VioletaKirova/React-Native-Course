import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartView from './views/StartView';

export default function App() {
  return (
    <View style={styles.view}>
      <Header title='Guess the number' />
      <StartView></StartView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
