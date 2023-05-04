import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DrawerNavigator from "../navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

function Home() {
  return (
    <View style={styles.container}>
      <Text>홈</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

export default Home;
