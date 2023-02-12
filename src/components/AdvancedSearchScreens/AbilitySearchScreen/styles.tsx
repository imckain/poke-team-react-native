import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flexDirection: "column",
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  clear: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    right: 34,
    width: "auto",
  },
  searchParamsContainter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  activeSearchParamText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderColor: "#fff",
    paddingBottom: 1,
  },
  inactiveSearchParamText: {
    color: "rgba(105, 105, 105, 0.6)",
    fontSize: 22,
    fontWeight: "400",
  },
  dexContainer: {
    alignSelf: "center",
    flex: 1,
  },
});
