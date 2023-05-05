export const screens = {
  HomeTabs: "HomeTabs",
  Home: "Home",
  HomeNavigator: "HomeNavigator",
  Community: "Community",
  CommunityNavigator: "CommunityNavigator",
  Competiton: "Competiton",
  CompetitonNavigator: "CompetitonNavigator",
  SchoolLife: "SchoolLife",
  SchoolLifeNavigator: "SchoolLifeNavigator",
  MyPage: "MyPage",
  MyPageNavigator: "MyPageNavigator",
};

export const routes = [
  {
    name: screens.HomeTabs,
    focusedRoute: screens.HomeTabs,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => {
      <Image
        style={{ width: size, height: size }}
        source={
          focused
            ? require("../assets/icons/homeActive.png")
            : require("../assets/icons/home.png")
        }
      />;
    },
  },
  {
    name: screens.HomeNavigator,
    focusedRoute: screens.HomeTabs,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => {
      <Image
        style={{ width: size, height: size }}
        source={
          focused
            ? require("../assets/icons/homeActive.png")
            : require("../assets/icons/home.png")
        }
      />;
    },
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeTabs,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => {
      <Image
        style={{ width: size, height: size }}
        source={
          focused
            ? require("../assets/icons/homeActive.png")
            : require("../assets/icons/home.png")
        }
      />;
    },
  },
  {
    name: screens.Community,
    focusedRoute: screens.Community,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => {
      <Image
        style={{ width: size, height: size }}
        source={
          focused
            ? require("../assets/icons/homeActive.png")
            : require("../assets/icons/home.png")
        }
      />;
    },
  },
];

// Community: "Community",
// CommunityNavigator: "CommunityNavigator",
// Competiton: "Competiton",
// CompetitonNavigator: "CompetitonNavigator",
// SchoolLife: "SchoolLife",
// SchoolLifeNavigator: "SchoolLifeNavigator",
// MyPage: "MyPage",
// MyPageNavigator: "MyPageNavigator",
