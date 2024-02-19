import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { PrimaryButton } from "../../components/common/primary-button";
import { PrimaryTextInput } from "../../components/common/primary-text-input";
import { useStartGame } from "../../hooks/start-game/useStartGame";
import { styles } from "./styles";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

type RootStackParamList = {
  Guess: { userChoice: number | undefined };
};

const StartGame: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { enteredNumber, setEnteredNumber, isValidNumber } = useStartGame();
  const { width, height } = useWindowDimensions();

  const confirmInputHandler = () => {
    if (enteredNumber !== undefined && isValidNumber(enteredNumber)) {
      navigation.navigate("Guess", { userChoice: enteredNumber });
    }
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(400).duration(500).springify().damping(12)}
      style={[styles.topWrapper, { width: width * 0.9, height: height * 0.3 }]}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Start a new game!</Text>
      </View>
      <PrimaryTextInput
        value={enteredNumber ? enteredNumber.toString() : ""}
        onChangeText={(text) => setEnteredNumber(+text)}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Reset"
            onPress={() => setEnteredNumber(undefined)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Confirm" onPress={confirmInputHandler} />
        </View>
      </View>
    </Animated.View>
  );
};

export { StartGame };
