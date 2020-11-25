import React from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IMAGES } from "../../configs";
import { Button } from "../../components";
import styles from "./styles";

const DATA = {
  text:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
};

const Component = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={IMAGES.splash} style={styles.image}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.title}>nifty</Text>
        <Text style={styles.text}>{DATA.text}</Text>
        <Button
          to={() => navigation.navigate("Splash2")}
          style={[styles.button]}
        >
          Get Started
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Component;
