import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const Component = () => {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.wrapItem}>
        <View style={styles.logo} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapItem}>
        <View style={styles.logo} />
        <Text style={styles.text}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.wrapItem}>
        <View style={styles.logo} />
        <Text style={styles.text}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
