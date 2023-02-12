import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 50,
  },
  buttonStyle: {
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    alignSelf: "center",
    width: "90%",
    paddingTop: 16,
  },
  teamsScrollView: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
  },
  teamsView: {
    flexDirection: "column",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 24,
    flex: 1,
  },
  teamContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(105, 105, 105, 0.6)",
  },
  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000000",
    textAlign: "center",
  },
});
