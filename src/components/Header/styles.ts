import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  title: {
    color: COLORS.green,
    fontSize: 25,
    fontWeight: "bold",
  },
  name: {
    color: COLORS.gray,
    fontSize: 20,
  },
  wrapIcon: {
    alignSelf: "center",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: COLORS.gray04,
  },
});

export default styles;
