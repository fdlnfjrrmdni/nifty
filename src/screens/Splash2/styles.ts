import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.background,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  image: {
    resizeMode: "contain",
    width: "60%",
    flex: 1,
    marginTop: 20,
  },
  title: {
    color: COLORS.green,
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
  },
  text: {
    color: COLORS.gray01,
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 40,
    marginBottom: 40,
  },
  button: {
    width: "80%",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default styles;
