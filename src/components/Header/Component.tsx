import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Component = () => {
  return (
    <View style={styles.wrap}>
      <View>
        <Text style={styles.title}>Welcome,</Text>
        <Text style={styles.name}>Gilang Aroempinang</Text>
      </View>
      <View style={styles.wrapIcon}>
        <TouchableOpacity style={styles.icon} />
      </View>
    </View>
  );
};

export default Component;
