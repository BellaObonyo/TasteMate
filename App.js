import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from './src/SplashScreen';
import WelcomeScreen from './src/WelcomeScreen';
import SignInScreen from './src/SignInScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('Splash');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100); // Wait for 200 milliseconds (0.2 seconds) for the splash screen
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setCurrentScreen('Welcome');
    }
  }, [isLoading]);

  const handleSwipeRight = () => {
    setCurrentScreen('SignIn');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen />;
      case 'Welcome':
        return <WelcomeScreen onSwipeRight={handleSwipeRight} />;
      case 'SignIn':
        return <SignInScreen />;
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
};

export default App;
