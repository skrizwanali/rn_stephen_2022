import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 23 },
    { name: "Friend #2", age: 26 },
    { name: "Friend #3", age: 21 },
    { name: "Friend #4", age: 24 },
    { name: "Friend #5", age: 25 },
    { name: "Friend #6", age: 27 },
    { name: "Friend #7", age: 22 },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        //element === { item: {name: "Friend #1"}, index: 0}
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
