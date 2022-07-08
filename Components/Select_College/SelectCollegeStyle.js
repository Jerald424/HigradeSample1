import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  dropDown: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    marginTop: "50px",
    gap: "10px",
    fontWeight: "600",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    margin: "auto",
  },

  okButton: {
    backgroundColor: "#9370DB",
    borderRadius: "10px",
    width: "100px",
    padding: "10px",
    textAlign: "center",
  },
  okText: {
    color: "white",
  },
  bottomBrand: {
    color: "red",
    marginTop: "100%",
  },
  selectColegePage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
});

export { style };
