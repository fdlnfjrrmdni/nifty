import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

function Component() {
  const listMemu = [
    {
      title: "Personal Information",
    },
    {
      title: "Personal Information",
    },
    {
      title: "Personal Information",
    },
    {
      title: "Personal Information",
    },
    {
      title: "Personal Information",
    },
  ];

  return (
    <View style={styles.wrap}>
      {listMemu.map((item, index) => (
        <TouchableOpacity
          style={[
            styles.wrapMenu,
            index !== 0 && index % 3 !== 0 && styles.wrapMenuMargin,
          ]}
          key={index}
        >
          <View style={styles.menu}>
            <View style={styles.icon} />
          </View>
          <Text style={styles.textMenu}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Component;
