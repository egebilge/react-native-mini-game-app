import React, { useEffect } from "react";
import { View, Text, Button, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useGuess } from "../../hooks/guess/useGuess";
import Animated, { FadeInDown } from "react-native-reanimated";

type RootStackParamList = {
  Guess: { userChoice: number };
};

const renderListItem = (value: number, numOfRound: number) => (
  <View key={value} style={styles.listItem}>
    <Text style={styles.listItemText}>#{numOfRound}</Text>
    <Text style={styles.listItemText}>{value}</Text>
  </View>
);

const Guess: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Guess">>();
  const { userChoice } = route.params;

  const { currentGuess, pastGuesses, nextGuessHandler, resetGameHandler } =
    useGuess({ userChoice });

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
    <Animated.View
      entering={FadeInDown.delay(200).duration(500).springify().damping(12)}
      style={styles.screen}
    >
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
    </Animated.View>
  );
};

export { Guess };
