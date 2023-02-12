import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    alignSelf: "center",
    backgroundColor: "#000000",
    paddingHorizontal: 10,
  },
  closeMessage: {
    alignSelf: "center",
    color: "rgba(255, 255, 255, 0.5)",
    paddingVertical: 7,
    fontStyle: "italic",
  },
  scrollViewContainer: {
    width: "100%",
  },
  spriteContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  mainInfo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 12,
  },
  gen: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 28,
    fontWeight: "600",
    paddingBottom: 12,
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    height: "auto",
  },
  encounterContainer: {
    flexDirection: "column",
    alignItems: "baseline",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
    height: "auto",
    marginBottom: 13,
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 25,
    paddingBottom: 300,
  },
  changeButton: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
  },
  changeLabel: {
    paddingVertical: 2,
    paddingLeft: 6,
    color: "rgb(223, 223, 223)",
    fontSize: 12,
  },
  locationNavigation: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 28,
  },
});
