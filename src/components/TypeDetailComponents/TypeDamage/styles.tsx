import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
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
  },
  damageContainer: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 24,
  },
  dmgCaseView: {
    alignItems: "flex-start",
    borderRadius: 10,
    backgroundColor: "#000000",
    marginVertical: 4,
    paddingVertical: 4,
  },
  dmgCaseHeader: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 22,
  },
  dmgResultsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
  },
  typeBox: {
    paddingVertical: 5,
    borderRadius: 10,
    margin: 5,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "auto",
  },
  typeText: {
    color: "rgb(223, 223, 223)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
    paddingVertical: 3,
    textShadowColor: "rgb(0, 0, 0)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
    textTransform: "capitalize",
  },
});
