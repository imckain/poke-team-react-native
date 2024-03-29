import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "#000000",
    paddingHorizontal: 12,
    paddingBottom: 120,
  },
  closeMessage: {
    alignSelf: "center",
    color: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 7,
    fontStyle: "italic",
  },
  dropDown: {
    backgroundColor: "#000000",
    marginBottom: 22,
    marginTop: 12,
    borderColor: "rgba(105, 105, 105, 0.6)",
    borderWidth: 1,
    borderRadius: 10,
  },
  encounterContainer: {
    borderWidth: 1,
    borderRadius: 10,
    height: "auto",
    marginVertical: 16,
    borderColor: "rgba(105, 105, 105, 0.6)",
    overflow: "hidden",
  },
  versionHeader: {
    flexDirection: "row",
    paddingLeft: 12,
    flexWrap: "wrap",
    paddingTop: 12,
    paddingBottom: 6,
    backgroundColor: "rgba(105, 105, 105, 0.6)",
  },
  versionText: {
    color: "#ffffff",
    fontWeight: "600",
    paddingRight: 10,
    fontSize: 26,
    textTransform: "capitalize",
  },
  locationBox: {
    paddingVertical: 6,
    backgroundColor: "#000000",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "auto",
  },
  locationName: {
    color: "rgb(223, 223, 223)",
    fontSize: 22,
    fontWeight: "600",
    paddingHorizontal: 24,
    paddingVertical: 6,
    textTransform: "capitalize",
  },
});
