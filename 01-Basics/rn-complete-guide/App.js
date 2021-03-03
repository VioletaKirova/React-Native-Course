import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoal = (goalValue) => {
    if (goalValue.trim().length === 0) {
      return;
    }
    const goal = { id: Math.random().toString(), value: goalValue };
    setGoals((currentGoals) => [...currentGoals, goal]);
    setAddMode(false);
  };

  const deleteGoal = (id) => {
    const updatedGoals = goals.filter((g) => g.id !== id);
    setGoals(updatedGoals);
  };

  const closeAddGoalModal = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.layout}>
      <View style={styles.buttonWrapper}>
        <Button title='Add your goal' onPress={() => setAddMode(true)} />
      </View>
      <GoalInput
        shouldShowModal={addMode}
        onAddButtonPressed={addGoal}
        onCancelButtonPressed={closeAddGoalModal}
      />
      <FlatList
        style={styles.goalList}
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={(currentGoalData) => (
          <GoalItem
            id={currentGoalData.item.id}
            title={currentGoalData.item.value}
            onItemPressed={deleteGoal}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    width: '100%',
    height: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  goalList: {
    marginTop: 10,
  },
});
