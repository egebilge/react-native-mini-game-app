import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "./src/utils/constants/colors";
import { AppNavigation } from "./src/navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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
            <AppNavigation />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
