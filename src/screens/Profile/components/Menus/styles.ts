import { StyleSheet } from "react-native";

import { COLORS } from "../../../../configs";

const styles = StyleSheet.create({
  wrap: {
    padding: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  wrapMenu: {
    width: 80,
    alignItems: "center",
    paddingVertical: 10,
  },
  menu: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.green,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  textMenu: {
    textAlign: "center",
    color: COLORS.gray,
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: COLORS.cream,
  },
});

export default styles;
