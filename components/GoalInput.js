import { View, Image, TextInput, Button, StyleSheet, Modal  } from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("")
  }

  return (
    <Modal visible={props.modalVisible} animationType="slide" >    
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/goal.png')}></Image>
      <TextInput
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your Course Goal!!"
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button color={"#fff"} onPress={addGoalHandler} title="Add Goal" />
        </View>
        <View style={styles.button}>
            <Button color={"#da6c6cff"} onPress={props.onCancel} title="Cancel" />
        </View>
        </View>
    </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#1366baff",
    height: "screen",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 15,
    marginBottom: 20,
    borderRadius: 6,
    color: "#fff",
    backgroundColor: "#1c69b5ff"
  },buttonContainer: {
    flexDirection: 'row'
  }, button: {
    width: "30%",
    marginHorizontal: 8
  }, 
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
});
