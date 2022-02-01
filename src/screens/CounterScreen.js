import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //todo: fix this
  //let counter = 0;

  const [counter, setCounter] = useState(0);

  console.log(counter);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //wrong way
          //   counter++;
          //correct way
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          //wrong way
          //   counter--;
          //correct way
          setCounter(counter - 1);
        }}
      />
      <Text>Current Counter : {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
