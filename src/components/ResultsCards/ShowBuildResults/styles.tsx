import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
  },
  info: {
    width: "100%",
    height: "auto",
    alignSelf: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
    borderColor: "rgba(105, 105, 105, 0.6)",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 12,
  },
  infoNotice: {
    textAlign: "center",
    color: "#ffffffa7",
    fontStyle: "italic",
    paddingTop: 2,
    fontSize: 12,
  },
});
