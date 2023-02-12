import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "baseline",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
  },
  collapsibleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  abilityBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#000000",
    margin: 7,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "auto",
  },
  abilityText: {
    color: "rgb(223, 223, 223)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: "capitalize",
  },
});
