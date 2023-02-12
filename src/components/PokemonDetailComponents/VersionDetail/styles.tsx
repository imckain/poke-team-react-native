import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 28,
  },
  scrollViewStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  versionTextBox: {
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#000000",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    marginVertical: 6,
  },
  versionText: {
    color: "rgb(223, 223, 223)",
    fontSize: 28,
    fontWeight: "600",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: "capitalize",
    textAlign: "center",
  },
  moveDetailText: {
    color: "rgb(223, 223, 223)",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 12,
    paddingTop: 1,
  },
});
