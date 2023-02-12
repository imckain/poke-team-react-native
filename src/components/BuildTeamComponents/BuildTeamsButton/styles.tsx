import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "center",
    marginHorizontal: 6,
  },
  label: {
    fontSize: 30,
    fontWeight: "600",
    color: "#fff",
    textShadowColor: "#53535383",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  icon: {
    textShadowColor: "#53535383",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
});
