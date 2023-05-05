import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { createStackNavigator } from "@react-navigation/stack";

import MealCard from "../components/mealCard";

const Stack = createStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {/* <SliderBox
        images={[
          "https://source.unsplash.com/1024x768/?nature", // Network image
          "https://source.unsplash.com/1024x768/?water", // Network image
          "https://source.unsplash.com/1024x768/?girl", // Network image
          "https://source.unsplash.com/1024x768/?tree", // Network image
          //require('./assets/images/girl.jpg')           // Local image
        ]}
      /> */}
        <MealCard />
      </ScrollView>
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
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  scroll: {
    marginTop: 23,
  },
});

export default HomeNavigator;
