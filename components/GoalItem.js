import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
      <View style={styles.goalItem}>
          <Pressable
            style={({ pressed }) => pressed && styles.pressedItem}
            onPress={props.onDelete.bind(this, props.id)}
          >
        <Text style={styles.goalText}>{props.text}</Text>
       </Pressable>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
  backgroundColor: "#220449ff",},
  goalText: {
    color: "white",
    padding: 8,
    borderRadius: 6,
  },
});
