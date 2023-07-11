import React from "react";
import { SvgUri } from "react-native-svg";
import { View, Text, StyleSheet, PanResponder } from "react-native";

const WelcomeScreen = ({ onSwipeRight }) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dx > 50) {
        onSwipeRight();
      }
    },
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <SvgUri uri={require("../assets/welcome.svg")} width={200} height={200} />
      <Text style={styles.welcomeMessage}>Welcome to TasteMate</Text>
      <Text style={styles.introMessage}>
        Hi, I'm here to help you find and try any recipes that you want.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: "bold",
  },
  introMessage: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default WelcomeScreen;
