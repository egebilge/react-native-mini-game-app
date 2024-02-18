import { StyleSheet } from "react-native";
import { Colors } from "../../../../utils/constants/colors";

const styles = StyleSheet.create({
  primaryButtonContainer: {
    backgroundColor: Colors.primary700,
    borderRadius: 50,
    paddingVertical: 10,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export { styles };
