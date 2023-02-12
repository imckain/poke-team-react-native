import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
  },
  searchBarContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 70,
  },
  searchBar: {
    paddingHorizontal: 6,
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 28,
  },
  scrollViewStyle: {
    marginBottom: 180,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  moveTextBox: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#000000",
    margin: 7,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "45%",
  },
  moveText: {
    color: "rgb(223, 223, 223)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textTransform: "capitalize",
  },
  moveDetailText: {
    color: "rgb(223, 223, 223)",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 12,
    paddingTop: 1,
  },
});
