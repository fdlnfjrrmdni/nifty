import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

function Component() {
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.wrapMenu}>
        <View style={styles.menu}>
          <View style={styles.icon} />
        </View>
        <Text style={styles.textMenu}>Personal Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapMenu}>
        <View style={styles.menu}>
          <View style={styles.icon} />
        </View>
        <Text style={styles.textMenu}>Personal Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapMenu}>
        <View style={styles.menu}>
          <View style={styles.icon} />
        </View>
        <Text style={styles.textMenu}>Personal Information</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.wrapMenu}>
        <View style={styles.menu}>
          <View style={styles.icon} />
        </View>
        <Text style={styles.textMenu}>Personal Information</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Component;
