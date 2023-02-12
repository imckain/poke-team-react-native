import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  typeContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#000000",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "auto",
    marginVertical: 2,
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
