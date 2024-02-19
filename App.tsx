import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { StartGameScreen } from "./src/screens/start-game";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./src/utils/constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GuessScreen } from "./src/screens/guess";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
      >
        <SafeAreaView style={styles.rootScreen}>
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
              <Stack.Screen
                name="StartGameScreen"
                component={StartGameScreen}
              />
              <Stack.Screen name="GuessScreen" component={GuessScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
        <StatusBar style="auto" />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
