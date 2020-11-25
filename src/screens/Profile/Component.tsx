import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import Header from "../../components/Header";
import Banner from "./components/Banner";
import Menus from "./components/Menus";
import BottomNavigation from "../../components/BottomNavigation";
import styles from "./styles";

const Component = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Banner />
        <Menus />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

export default Component;
