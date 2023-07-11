import React from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

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
      <Text style={styles.welcomeMessage}>Welcome to TasteMate</Text>
      <Text styles={styles.introMessage}>Hi I'm here to help you find and try any receipts that you want</Text>
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeMessage: {
    fontSize: 24,
    fontWeight: 'bold',
  },

});

export default WelcomeScreen;
