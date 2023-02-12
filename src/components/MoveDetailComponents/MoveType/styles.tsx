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
    width: "auto",
  },
  typeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: "rgba(0, 0, 0, 0.712)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    textTransform: "capitalize",
  },
});
