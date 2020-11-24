import React from "react";
import { SafeAreaView, View } from "react-native";

import Header from "../../components/Header";
import Banner from "./components/Banner";
import Menus from "./components/Menus";
import BottomNavigation from "../../components/BottomNavigation";
import styles from "./styles";

const Component = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <Banner />
        <Menus />
      </View>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default Component;
