import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import Profile from "../screens/Profile";

import i18n from "../I18n";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}
  >
    <Screen
      name="Profile"
      component={Profile}
      options={{ title: i18n.t("profile"), headerShown: false }}
    />
  </Navigator>
);

export default Stack;
