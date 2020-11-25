import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.green,
  },
  title: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: "bold",
    padding: 20,
    marginTop: 20,
  },
  text: {
    color: COLORS.white01,
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 40,
    marginBottom: 12,
  },
  button: {
    margin: 28,
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapEmptyData: {
    paddingTop: 50,
    alignItems: "center",
  },
});

export default styles;
