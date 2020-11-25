import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import I18n from "../../I18n";
import { Button, Icon } from "../../components";
import styles from "./styles";
import { COLORS } from "../../configs";

const Component = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.back}>
          <Icon name="back" size={30} color={COLORS.black} />
        </View>
        <Text style={styles.title}>{`${I18n.t("login")}.`}</Text>
        <View style={styles.form}>
          <View style={styles.row}>
            <View style={styles.wrapBtn}>
              <Button
                reverse
                to={() => navigation.navigate("Profile")}
                custom
                style={[styles.btnGoogle, styles.btn]}
              >
                <Text style={styles.txtBtn}>Google</Text>
              </Button>
            </View>
            <View style={styles.wrapBtn}>
              <Button
                reverse
                to={() => navigation.navigate("Profile")}
                custom
                style={[styles.btnLinkedin, styles.btn]}
              >
                <Text style={styles.txtBtn}>Linkedin</Text>
              </Button>
            </View>
          </View>
          <Text style={styles.text}>{I18n.t("email?")}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          reverse
          to={() => navigation.navigate("Profile")}
          style={[styles.button]}
        >
          Log In
        </Button>
        <Text style={styles.text}>{I18n.t("account?")}</Text>
      </View>
    </View>
  );
};

export default Component;
