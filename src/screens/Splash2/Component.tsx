import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
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
    <View style={styles.container}>
      <StatusBar />
      <Image source={IMAGES.splash2} style={styles.image} />
      <Text style={styles.title}>Lorem Ipsum</Text>
      <Text style={styles.text}>{DATA.text}</Text>
      <Button
        reverse
        to={() => navigation.navigate("LogIn")}
        style={[styles.button]}
      >
        Log In
      </Button>
      <Button to={() => navigation.navigate("Json")} style={[styles.button]}>
        Create Account
      </Button>
    </View>
  );
};

export default Component;
