import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles";

const DATA = {
  paragraph:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos voluptatibus itaque ullam laborum illum impedit explicabo inventore numquam, iusto sed exercitationem ipsum dolore quaerat, natus est qui veniam hic vitae?",
};

function Component() {
  return (
    <View style={styles.wrap}>
      <View style={styles.preview}>
        <View style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.paragraph} numberOfLines={7}>
            {DATA.paragraph}
          </Text>
        </View>
      </View>
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Architect</Text>
        <TouchableOpacity style={styles.icon} />
      </View>
    </View>
  );
}

export default Component;
