import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  image: {
    resizeMode: "contain",
    width: "60%",
    flex: 1,
    marginTop: 20,
  },
  title: {
    color: COLORS.green,
    fontSize: 28,
    fontWeight: "bold",
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
  form: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  wrapBtn: {
    width: "50%",
  },
  btn: {
    paddingVertical: 12,
    borderRadius: 20,
    elevation: 5,
    alignItems: "center",
  },
  btnGoogle: {
    marginRight: 6,
    backgroundColor: COLORS.google,
  },
  btnLinkedin: {
    marginLeft: 6,
    backgroundColor: COLORS.linkedin,
  },
  button: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  back: {
    margin: 20,
  },
  row: {
    flexDirection: "row",
  },
  footer: {
    paddingHorizontal: 40,
  },
  txtBtn: {
    fontSize: 24,
    color: COLORS.white,
  },
  text: {
    color: COLORS.gray01,
    fontSize: 16,
    alignSelf: "center",
    padding: 26,
  },
});

export default styles;
