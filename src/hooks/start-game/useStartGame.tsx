import { useMemo, useState } from "react";
import { Alert } from "react-native";

const useStartGame = () => {
  const [enteredNumber, setEnteredNumber] = useState<number | undefined>(
    undefined,
  );

  const isValidNumber = (number: number | undefined) => {
    const isNumberValid = number !== undefined && number > 0 && number < 100;
    if (!isNumberValid) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", onPress: () => setEnteredNumber(undefined) }],
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

export { useStartGame };
