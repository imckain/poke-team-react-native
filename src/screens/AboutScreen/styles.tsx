import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    paddingTop: 60,
  },
  headerContainer: {
    paddingHorizontal: 12,
    paddingBottom: 6,
  },
  break: {
    height: 2,
    width: "100%",
    marginBottom: 8,
  },
  header: {
    fontSize: 42,
    fontWeight: "600",
    color: "#fff",
  },
  aboutMessage: {
    paddingHorizontal: 24,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  subText: {
    color: "rgb(225, 225, 225)",
    fontSize: 18,
    paddingLeft: 6,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 10,
  },
  back: {
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#fff",
  },
  fairUse: {
    fontSize: 12,
    color: "#ffffff73",
    paddingBottom: 60,
  },
});
