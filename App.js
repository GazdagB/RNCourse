import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible,setModalVisible] = useState(false)

  function startAddGoal(){
    setModalVisible(true)
  }

  function endAddGoal(){
    setModalVisible(false);
  }
 
 function deleteGoal(id) {
  setCourseGoals(prev => prev.filter(item => item.id !== id));
}

 function addGoalHandler(enteredGoalText) {
  const trimmed = enteredGoalText.trim();
  if (trimmed === "") return;

  setCourseGoals(prev => [
    ...prev,
    { text: trimmed, id: Math.random().toString() },
  ]);

  endAddGoal(); 
}

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle={"default"} />
      <Button onPress={startAddGoal} title='Add New Goal' color={"#5e0acc"}></Button>
      <GoalInput modalVisible={modalVisible} onCancel={endAddGoal} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals}
        renderItem={(itemData)=>{
          return <GoalItem onDelete={deleteGoal} text={itemData.item.text} id={itemData.item.id}/>
        }}
        keyExtractor={(item,index)=>{
          return item.id
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 30,
    paddingTop: 70,
    flex: 1,
  },
  goalsContainer: {
    flex: 6,
  },
 
});
