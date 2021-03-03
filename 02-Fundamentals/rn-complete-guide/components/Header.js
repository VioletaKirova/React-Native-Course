import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0D1CE',
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.darkGrey,
  },
});

export default Header;
