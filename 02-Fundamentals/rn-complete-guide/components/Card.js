import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Card = (props) => {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    shadowColor: Colors.darkGrey,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
