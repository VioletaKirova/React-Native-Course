import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = (props) => {
  const [goal, setGoal] = useState('');

  const onChangeTextHandler = (textInput) => {
    setGoal(textInput);
  };

  const onAddPressed = () => {
    props.onAddButtonPressed(goal);
    setGoal('');
  };

  const onCancelPressed = () => {
    props.onCancelButtonPressed();
  };

  return (
    <Modal visible={props.shouldShowModal} animationType='slide'>
      <View style={styles.layout}>
        <View style={styles.main}>
          <TextInput
            value={goal.value}
            onChangeText={onChangeTextHandler}
            placeholder='Enter your goal...'
            style={styles.input}
          />
          <Button onPress={onAddPressed} title='Add' style={styles.addBtn} />
        </View>
        <View style={styles.footer}>
          <Button onPress={onCancelPressed} title='Cancel' color='grey' />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 20,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  input: {
    width: '80%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#C7CBCB',
    borderRadius: 5,
    padding: 10,
  },
  addBtn: {
    width: '20%',
  },
});

export default GoalInput;
