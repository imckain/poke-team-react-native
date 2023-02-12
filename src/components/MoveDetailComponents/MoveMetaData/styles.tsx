import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "baseline",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#000000",
    paddingVertical: 5,
    marginBottom: 13,
    paddingHorizontal: 12,
  },
  subHeaderText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 28,
  },
  metaDataContainer: {
    backgroundColor: "#000000",
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 6,
    marginBottom: 6,
  },
  headerWrapper: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metaDataHeaderText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
  },
  descriptionText: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "500",
    fontStyle: "italic",
    width: "100%",
    paddingVertical: 4,
  },
  break: {
    height: 1,
    width: "100%",
    marginBottom: 8,
    marginTop: 6,
  },
  scrollViewStyle: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 24,
  },
  metaDataText: {
    color: "rgb(223, 223, 223)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    paddingVertical: 3,
  },
});
