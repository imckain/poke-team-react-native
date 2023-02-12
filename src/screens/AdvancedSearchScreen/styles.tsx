import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flexDirection: "column",
    flex: 1,
    paddingTop: 50,
  },
  searchBarContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: 100,
    marginBottom: 18,
  },
  searchBar: {
    paddingHorizontal: 6,
  },
  searchSettingIcon: {
    paddingRight: 20,
  },
  searchParamsContainter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 16,
  },
  activeSearchParamText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderColor: "#fff",
    paddingBottom: 1,
  },
  inactiveSearchParamText: {
    color: "rgba(105, 105, 105, 0.6)",
    fontSize: 18,
    fontWeight: "400",
  },
});
