import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "baseline",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
    marginBottom: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 28,
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scrollViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 12,
  },
  moveTextBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#000000",
    marginBottom: 12,
    marginRight: 12,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  moveText: {
    color: "rgb(223, 223, 223)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    textTransform: "capitalize",
  },
});
