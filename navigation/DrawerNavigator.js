import React from "react";
import { Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Alarm from "../pages/Alarm";
import alarmIcon from "../assets/bell.png";

function HeaderR() {
  return <Image style={{ width: "20%" }} source={alarmIcon} />;
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          shadowOpacity: 0,
        },
        headerTitle: "",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => <HeaderR />,
          headerRightContainerStyle: { paddingRight: 10 },
          headerLeftContainerStyle: { paddingRight: 10 },
        }}
      />
      <Drawer.Screen name="Alarm" component={Alarm} />
    </Drawer.Navigator>
  );
}
// <Drawer.Navigator
//   initialRouteName=" "
//   drawerPosition="left"
//   backBehavior="history"
// >
//   <Drawer.Screen name="Home" component={Home} />
// </Drawer.Navigator>

export default DrawerNavigator;
