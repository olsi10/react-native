import React from "react";
// import { StyleSheet, Image, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "./navigation/DrawerNavigator";
import Banner from "./components/Banner";

import BottomNavigator from "./navigation/BottomNavigator";

const Stack = createNativeStackNavigator();

const bt = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator>
        <DrawerNavigator.Screen name="Home" component={bt} />
      </DrawerNavigator>
    </NavigationContainer>
  );
};

export default App;
