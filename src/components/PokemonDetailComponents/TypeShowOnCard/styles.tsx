import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 7,
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#000000",
    marginLeft: 7,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 70,
  },
  typeText: {
    color: "rgb(223, 223, 223)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 6,
    paddingVertical: 3,
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
    textTransform: "capitalize",
  },
});
