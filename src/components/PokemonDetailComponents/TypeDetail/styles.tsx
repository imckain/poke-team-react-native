import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  typeLabelText: {
    color: "#fff",
    marginTop: 7,
    fontWeight: "600",
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#000000",
    margin: 7,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 140,
  },
  typeText: {
    color: "rgb(223, 223, 223)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    textTransform: "capitalize",
  },
});
