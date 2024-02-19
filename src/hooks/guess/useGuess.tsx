import { useNavigation } from "@react-navigation/native";
import { useMemo, useState } from "react";
import { Alert } from "react-native";

interface IGuessScreenProps {
  readonly userChoice: number;
}

const useGuess = ({ userChoice }: IGuessScreenProps) => {
  const generateRandomBetween = (
    min: number,
    max: number,
    exclude: number,
  ): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  };

  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
  const [currentMin, setCurrentMin] = useState(1);
  const [currentMax, setCurrentMax] = useState(100);
  const navigation = useNavigation();

  const resetGameHandler = () => {
    navigation.navigate("StartGame" as never);
  };

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess <= userChoice) ||
      (direction === "greater" && currentGuess >= userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      setCurrentMax((prevCurrentMax) =>
        Math.min(prevCurrentMax, currentGuess - 1),
      );
    } else {
      setCurrentMin((prevCurrentMin) =>
        Math.max(prevCurrentMin, currentGuess + 1),
      );
    }

    const newMin = direction === "lower" ? currentMin : currentGuess + 1;
    const newMax = direction === "greater" ? currentMax : currentGuess - 1;
    const newGuess = generateRandomBetween(newMin, newMax, currentGuess);

    setCurrentGuess(newGuess);
    setPastGuesses((curPastGuesses) => [newGuess, ...curPastGuesses]);
  };

  const data = useMemo(() => {
    return {
      currentGuess,
      pastGuesses,
      nextGuessHandler,
      resetGameHandler,
    };
  }, [currentGuess, pastGuesses]);

  return data;
};

export { useGuess };
