import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {},
  mainCardContainer: {
    flexDirection: "row",
    borderRadius: 10,
    width: "90%",
    height: "auto",
    alignSelf: "center",
    backgroundColor: "#000000",
    borderColor: "rgba(105, 105, 105, 0.6)",
    borderWidth: 1,
  },
  mainInfo: {
    justifyContent: "flex-start",
    maxWidth: "100%",
    paddingHorizontal: 12,
  },
  infoNotice: {
    textAlign: "center",
    color: "#ffffffa7",
    fontStyle: "italic",
    paddingTop: 2,
    paddingBottom: 8,
    fontSize: 12,
  },
});
