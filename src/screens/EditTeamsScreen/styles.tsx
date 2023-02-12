import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#000000",
    justifyContent: "center",
    height: "auto",
    flexDirection: "column",
    width: "auto",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  container: {
    backgroundColor: "#000000",
    flexDirection: "column",
    paddingTop: 60,
    width: "100%",
    flex: 1,
  },
  teamSlotContainer: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
  },
  addMonCard: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  searchBar: {
    zIndex: 0,
  },
  clear: {
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    right: 34,
    width: "auto",
  },
  teamNameContainer: {
    height: "auto",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputStyle: {
    height: "100%",
    fontSize: 48,
    textAlign: "center",
    fontWeight: "500",
    color: "#fff",
  },
  teamInfoContainer: {
    flexDirection: "row",
    paddingBottom: 60,
    flex: 1,
  },
  nullMessage: {
    fontSize: 32,
    fontWeight: "600",
    color: "#fff",
  },
  rightAction: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  back: {
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  save: {
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "green",
    paddingVertical: 4,
    marginHorizontal: 12,
  },
  saveText: {
    color: "#000000",
    fontSize: 16,
  },
  backText: {
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dexContainer: {
    alignSelf: "center",
    flex: 1,
  },
});
