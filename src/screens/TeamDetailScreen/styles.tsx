import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flexDirection: "column",
    paddingTop: 60,
    width: "100%",
    flex: 1,
  },
  teamSlotContainer: {
    marginBottom: 44,
  },
  teamNameContainer: {
    height: "auto",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  teamName: {
    height: "100%",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "500",
    color: "#fff",
    paddingBottom: 12,
  },
  teamInfoContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  back: {
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  edit: {
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
