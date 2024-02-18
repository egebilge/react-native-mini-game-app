import { StyleSheet } from "react-native";
import { Colors } from "../../../../utils/constants/colors";

const styles = StyleSheet.create({
  primaryTextInput: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    padding: 20,
    margin: 20,
    alignSelf: "center",
    color: Colors.accent500,
    fontSize: 26,
    fontWeight: "bold",
  },
});

export { styles };
