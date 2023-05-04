import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Community from "../pages/Community";
import SchoolLife from "../pages/SchoolLife";
import Competition from "../pages/Competition";
import MyPage from "../pages/MyPage";

import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { height: 49 },
        tabBarLabelStyle: { padding: 10, marginTop: -10 },
        tabBarActiveTintColor: "#000000",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "홈",
          size: 30,
          tabBarIcon: ({ focused, color, size }) => {
            if (this.name === "Home") {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../assets/icons/homeActive.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("../assets/icons/home.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: "커뮤니티",
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../assets/icons/chat.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SchoolLife"
        component={SchoolLife}
        options={{
          tabBarLabel: "학교생활",
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../assets/icons/notebook.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Competition"
        component={Competition}
        options={{
          tabBarLabel: "공모전",
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../assets/icons/cup.png")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          tabBarLabel: "My",
          tabBarIcon: ({ color, size }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../assets/icons/person.png")}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;
