import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/constants/colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  guessText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: Colors.accent500,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    maxWidth: "90%",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: Colors.accent500,
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    borderRadius: 10,
  },
  listItemText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export { styles };
