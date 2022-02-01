import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components"
      />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Go to Image screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Got to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Got to Counter Demo with Reducer"
        onPress={() => navigation.navigate("Counter1")}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Square Demo with Reducer"
        onPress={() => navigation.navigate("Square1")}
      />
      <Button
        title="Go to Text Screen Demo"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="Go to Text Validation Screen Demo"
        onPress={() => navigation.navigate("TextValidationScreen")}
      />
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
});

export default HomeScreen;
