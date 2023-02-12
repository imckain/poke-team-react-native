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
  spriteContainer: {
    flexDirection: "row",
  },
  mainInfo: {
    maxWidth: "100%",
    paddingTop: 12,
  },
  detailInfo: {
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 8,
    paddingBottom: 300,
  },
});
