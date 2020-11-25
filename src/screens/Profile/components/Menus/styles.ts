import { StyleSheet } from "react-native";

import { COLORS } from "../../../../configs";
import { widthPercent } from "../../../../utils";

const styles = StyleSheet.create({
  wrap: {
    padding: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginHorizontal: 16,
  },
  wrapMenu: {
    width: 80,
    alignItems: "center",
    paddingVertical: 10,
  },
  wrapMenuMargin: {
    marginLeft: (widthPercent(100) - 40 * 2 - 80 * 3 - 16 * 2) / 2,
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
