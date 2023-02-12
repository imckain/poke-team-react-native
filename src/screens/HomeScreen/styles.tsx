import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
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
  buttonStyle: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
  },
  largeButtonStyle: {
    width: "100%",
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
    height: "auto",
    marginVertical: 4,
  },
  teamsNavContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "auto",
  },
  largeNavContainer: {
    justifyContent: "space-evenly",
    marginTop: 48,
    width: "90%",
    flexDirection: "column",
    alignSelf: "center",
    overflow: "hidden",
  },
});
