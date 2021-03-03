import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
  const { id, title, onItemPressed } = props;

  return (
    <TouchableOpacity
      onPress={onItemPressed.bind(this, id)}
      activeOpacity={0.2}
    >
      <View>
        <Text style={styles.listItem}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
    elevation: 5,
    padding: 10,
    marginHorizontal: 2,
    marginVertical: 4,
  },
});

export default GoalItem;
