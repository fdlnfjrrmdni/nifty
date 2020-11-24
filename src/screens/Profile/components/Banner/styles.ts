import { StyleSheet } from "react-native";

import { COLORS } from "../../../../configs";

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLORS.purple,
    borderRadius: 25,
    elevation: 20,
    paddingBottom: 10,
  },
  preview: {
    backgroundColor: COLORS.white,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    borderRadius: 25,
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: COLORS.cream,
  },
  content: {
    padding: 5,
    width: 200,
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.gray,
  },
  wrapTitle: {
    paddingHorizontal: 50,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: COLORS.cream,
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.white,
    alignSelf: "center",
  },
});

export default styles;
