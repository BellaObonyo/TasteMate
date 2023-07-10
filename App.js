import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import LastScreen from './LastScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('Splash');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Wait for 2000 milliseconds (2 seconds) for the splash screen
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setCurrentScreen('Welcome');
    }
  }, [isLoading]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen />;
      case 'Welcome':
        return <WelcomeScreen />;
      case 'Last':
        return <LastScreen />;
      default:
        return null;
    }
  };

  return <View style={{ flex: 1 }}>{renderScreen()}</View>;
};

export default App;
