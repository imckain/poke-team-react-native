import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
    borderColor: "rgba(105, 105, 105, 0.6)",
    borderWidth: 1,
  },
  mainCardContainer: {
    flexDirection: "row",
    height: "auto",
    alignSelf: "center",
    alignItems: "center",
  },
  mainInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
    paddingBottom: 20,
  },
  detailInfo: {
    flex: 1,
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
