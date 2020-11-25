import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 46,
    paddingVertical: 18,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
  },
  buttonReverse: {
    paddingHorizontal: 46,
    paddingVertical: 18,
    backgroundColor: COLORS.green,
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    color: COLORS.green,
    fontWeight: "bold",
    fontSize: 18,
  },
  textReverse: {
    color: COLORS.cream,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
