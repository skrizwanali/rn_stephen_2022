import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextValidationScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>{password}</Text>
      {password.length < 4 ? (
        <Text>Password should be atleast of 4 character</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 40,
  },
});

export default TextValidationScreen;
