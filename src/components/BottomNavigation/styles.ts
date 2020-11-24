import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.white,
    elevation: 20,
    borderRadius: 25,
    padding: 20,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wrapItem: {
    borderWidth: 1,
    height: 50,
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.cream,
  },
  text: {
    color: COLORS.gray,
  },
});

export default styles;
