import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dmgClassView: {
    paddingVertical: 12,
    alignSelf: "center",
  },
  damageClass: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textShadowColor: "rgba(0, 0, 0, 0.712)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    paddingBottom: 12,
  },
  damageClassSub: {
    color: "rgb(223, 223, 223)",
    fontSize: 20,
    fontWeight: "400",
    textShadowColor: "rgba(0, 0, 0, 0.712)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    textTransform: "capitalize",
  },
  typeBox: {
    // paddingHorizontal: 6,
    borderRadius: 10,
    marginBottom: 18,
    width: "100%",
  },
  typeText: {
    color: "#fff",
    fontWeight: "600",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    textTransform: "capitalize",
  },
});
