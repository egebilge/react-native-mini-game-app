import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/constants/colors";

const styles = StyleSheet.create({
  topWrapper: {
    backgroundColor: Colors.primary500,
    padding: 20,
    borderRadius: 10,
    width: "90%",
    marginTop: 50,
    alignSelf: "center",
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});

export { styles };
