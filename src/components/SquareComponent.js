import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SquareComponent = ({ title, onMore, onLess }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`More ${title}`} onPress={() => onMore()} />
      <Button title={`Less ${title}`} onPress={() => onLess()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareComponent;
