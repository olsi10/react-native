import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { createStackNavigator } from "@react-navigation/stack";
import HomeSwiper from "../components/HomeSwiper";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeSwiper />
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  scroll: {
    marginTop: 23,
  },
});

export default HomeNavigator;
