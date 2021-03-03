import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartView = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputChangeHandler = (value) => {
    setInputValue(value.replace(/[^0-9]/g, ''));
  };

  const resetHandler = () => {
    setInputValue('');
    setHasConfirmed(false);
  };

  const confirmHandler = () => {
    var inputNumber = parseInt(inputValue);
    if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
      Alert.alert('Invalid input!', 'Must be a number between 1 and  99.', [
        { text: 'Okay', style: 'destructive', onPress: resetHandler },
      ]);
      return;
    }
    setHasConfirmed(true);
    setSelectedNumber(parseInt(inputValue));
    setInputValue('');
  };

  let confirmedOutput;

  if (hasConfirmed) {
    confirmedOutput = <Text>Selected Number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.view}>
        <Text style={styles.title}>Begin</Text>
        <Card style={styles.inputCard}>
          <Text style={styles.subTitle}>Select your number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={inputChangeHandler}
            value={inputValue}
          />
          <View style={styles.controls}>
            <View style={styles.resetButton}>
              <Button
                title='Reset'
                onPress={resetHandler}
                color={Colors.darkGrey}
              />
            </View>
            <View style={styles.confirmButton}>
              <Button
                title='Confirm'
                onPress={confirmHandler}
                color={Colors.blue}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 14,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.darkGrey,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: Colors.mediumGrey,
  },
  inputCard: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '20%',
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  resetButton: {
    width: '50%',
    paddingRight: 5,
  },
  confirmButton: {
    width: '50%',
    paddingLeft: 5,
  },
});

export default StartView;
