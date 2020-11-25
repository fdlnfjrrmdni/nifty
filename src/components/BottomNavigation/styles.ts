import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.white,
    elevation: 8,
    borderRadius: 25,
    padding: 20,
    // alignSelf: "center",
    // width: "100%",
    marginBottom: 20,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wrapItem: {
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
