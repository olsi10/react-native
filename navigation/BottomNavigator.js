import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Image, View } from "react-native";

import Home from "../pages/Home";
import Community from "../pages/Community";
import SchoolLife from "../pages/SchoolLife";
import Competition from "../pages/Competition";
import MyPage from "../pages/MyPage";

// import homeIcon from "../assets/icons/home-alt.png";
// import bell from "../assets/bell.png";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "rgba(23, 227, 129, 1)",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "홈",
          // tabBarIcon: ({ color, size }) => <Image source={homeIcon} />,
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          title: "커뮤니티",
          // tabBarIcon: ({ color, size }) => <Image source={homeIcon} />,
        }}
      />
      <Tab.Screen
        name="ScoolLife"
        component={SchoolLife}
        options={{
          title: "학교생활",
          // tabBarIcon: ({ color, size }) => <Image source={homeIcon} />,
        }}
      />
      <Tab.Screen
        name="Competition"
        component={Competition}
        options={{
          title: "공모전",
          // tabBarIcon: ({ color, size }) => <Image source={homeIcon} />,
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "My",
          // tabBarIcon: ({ color, size }) => <Image source={homeIcon} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
