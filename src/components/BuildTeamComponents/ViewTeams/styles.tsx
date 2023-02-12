import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: 10,
    marginVertical: 12,
  },
  container: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    height: "auto",
    alignSelf: "center",
  },
  label: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    paddingBottom: 6,
    paddingRight: 36,
  },
  labelContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "rgba(105, 105, 105, 0.6)",
    borderBottomWidth: 2,
    marginLeft: 12,
    marginVertical: 12,
  },
  spriteContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 12,
    justifyContent: "space-evenly",
  },
  delete: {},
  rightAction: {
    justifyContent: "center",
    backgroundColor: "#ff0000",
    width: 80,
    alignItems: "center",
  },
});
