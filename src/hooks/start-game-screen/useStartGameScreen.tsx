import { useMemo, useState } from "react";
import { Alert } from "react-native";

const useStartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState<number | null>(null);

  const isValidNumber = (number: number | null) => {
    const isNumberValid = number !== null && number > 0 && number < 100;
    if (!isNumberValid) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", onPress: () => setEnteredNumber(null) }],
      );
      return false;
    }
    return true;
  };

  const data = useMemo(
    () => ({
      enteredNumber,
      setEnteredNumber,
      isValidNumber,
    }),
    [enteredNumber],
  );

  return data;
};

export { useStartGameScreen };
