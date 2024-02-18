import React, { useEffect } from "react";
import { View, Text, Button, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useGuessScreen } from "../../hooks/guess-screen/useGuessScreen";

type RootStackParamList = {
  GuessScreen: { userChoice: number };
};

const renderListItem = (value: number, numOfRound: number) => (
  <View key={value} style={styles.listItem}>
    <Text style={styles.listItemText}>#{numOfRound}</Text>
    <Text style={styles.listItemText}>{value}</Text>
  </View>
);

const GuessScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "GuessScreen">>();
  const { userChoice } = route.params;

  const { currentGuess, pastGuesses, nextGuessHandler, resetGameHandler } =
    useGuessScreen({ userChoice });

  useEffect(() => {
    if (currentGuess === userChoice) {
      Alert.alert("Congratulations!", "You guessed the number!", [
        {
          text: "Restart",
          onPress: resetGameHandler,
        },
      ]);
    }
  }, [currentGuess, userChoice, resetGameHandler]);

  return (
    <View style={styles.screen}>
      <Text style={styles.guessText}>Opponent's Guess: {currentGuess}</Text>
      <View style={styles.controls}>
        <Button
          title="LOWER"
          onPress={nextGuessHandler.bind(this, "lower")}
          color="white"
        />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
          color="white"
        />
      </View>
      <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.listContent}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index),
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export { GuessScreen };
