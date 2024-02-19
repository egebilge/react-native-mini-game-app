import React from "react";
import { View, Text } from "react-native";
import { PrimaryButton } from "../../components/common/primary-button";
import { PrimaryTextInput } from "../../components/common/primary-text-input";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStartGame } from "../../hooks/start-game/useStartGame";

type RootStackParamList = {
  GuessScreen: { userChoice: number };
};

const StartGame: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { enteredNumber, setEnteredNumber, isValidNumber } = useStartGame();

  const confirmInputHandler = () => {
    if (enteredNumber !== null && isValidNumber(enteredNumber)) {
      navigation.navigate("GuessScreen", { userChoice: enteredNumber });
    }
  };

  return (
    <View style={styles.topWrapper}>
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
    </View>
  );
};

export { StartGame };
