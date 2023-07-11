import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Image source={require('../assets/TasteMate.png')} style={styles.logoImage} />
      </View>
      <Text style={styles.logo}>TasteMate</Text>
      <Text style={styles.subtitle}>Loading...</Text>
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
  background: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
    position: 'absolute',
    top: 200,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default SplashScreen;
