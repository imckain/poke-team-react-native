import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  nameContainer: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 12,
  },
  name: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
    marginTop: 6,
  },
  id: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 18,
    fontWeight: "600",
  },
});
