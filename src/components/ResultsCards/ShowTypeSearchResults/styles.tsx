import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "auto",
  },
  mainCardContainer: {
    flexDirection: "row",
    borderRadius: 10,
    width: "90%",
    height: "auto",
    alignSelf: "center",
    backgroundColor: "#000000",
    borderColor: "rgba(105, 105, 105, 0.6)",
    borderWidth: 1,
    justifyContent: "center",
  },
  mainInfo: {
    // justifyContent: 'flex-start',
    maxWidth: "100%",
    paddingHorizontal: 12,
  },
  detailInfo: {
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  infoNotice: {
    textAlign: "center",
    color: "#ffffffa7",
    fontStyle: "italic",
    paddingTop: 2,
    fontSize: 12,
  },
});
