import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { GuessScreen } from "../screens/guess";
import { StartGameScreen } from "../screens/start-game";

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartGame"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Stack.Screen name="StartGame" component={StartGameScreen} />
        <Stack.Screen name="Guess" component={GuessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigation };
