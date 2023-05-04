import React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import BottomStack from "./BottomNavigator";

// import Home from "../pages/Home";
import Community from "../pages/Community";
import SchoolLife from "../pages/SchoolLife";
import Competition from "../pages/Competition";
import MyPage from "../pages/MyPage";
import Alarm from "../pages/Alarm";
import { TouchableOpacity } from "react-native-gesture-handler";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomStack" component={BottomStack} />
    </Stack.Navigator>
  );
};

const CommunityStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Community"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Community} />
    </Stack.Navigator>
  );
};

const SchoolLifeScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="SchoolLife"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={SchoolLife} />
    </Stack.Navigator>
  );
};

const CompetitionScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Competition"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Competition} />
    </Stack.Navigator>
  );
};

const MyPageScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MyPage} />
    </Stack.Navigator>
  );
};

// Drawer

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFFFFF", //Set Header color
        },
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        initialRouteName="Alarm"
        options={{
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../assets/bell.png")}
              />
            </TouchableOpacity>
          ),
          drawerLabel: "홈",
          title: "홈",
          tabBarBadge: 3,
        }}
        component={HomeStack}
      />
      <Drawer.Screen
        name="CommunityStack"
        options={{
          drawerLabel: "커뮤니티",
          title: "커뮤니티",
        }}
        component={CommunityStack}
      />
      <Drawer.Screen
        name="SchoolLifeScreen"
        options={{
          drawerLabel: "학교생활",
          title: "학교생활",
        }}
        component={SchoolLifeScreen}
      />
      <Drawer.Screen
        name="CompetitionScreen"
        options={{
          drawerLabel: "공모전",
          title: "공모전",
        }}
        component={CompetitionScreen}
      />
      <Drawer.Screen
        name="MyPageScreen"
        options={{
          drawerLabel: "My",
          title: "My",
        }}
        component={MyPageScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
