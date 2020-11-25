import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Splash from "../screens/Splash";
import Splash2 from "../screens/Splash2";
import LogIn from "../screens/LogIn";
import Profile from "../screens/Profile";
import Json from "../screens/Json";

import i18n from "../I18n";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Splash"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Screen
      name="Splash2"
      component={Splash2}
      options={{ headerShown: false }}
    />
    <Screen
      name="LogIn"
      component={LogIn}
      options={{ title: i18n.t("login"), headerShown: false }}
    />
    <Screen
      name="Profile"
      component={Profile}
      options={{ title: i18n.t("profile"), headerShown: false }}
    />
    <Screen name="Json" component={Json} options={{ headerShown: false }} />
  </Navigator>
);

export default Stack;
