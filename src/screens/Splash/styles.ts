import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.green,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    height: "45%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
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
});

export default styles;
