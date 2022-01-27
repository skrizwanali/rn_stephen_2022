import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = "Hi there!";
  const greet2 = <Text>Hello there!</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Component Screen</Text>
      <Text>{greeting}</Text>
      {greet2}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
    textAlign: "center",
    color: "blue",
  },
});

export default ComponentScreen;
