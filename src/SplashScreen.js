
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Image
        source={require('./assets/TasteMate.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
      <Text style={styles.text}>TasteMate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    position: 'relative',
    top: 10, 
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '25%', 
    // backgroundColor: 'rgba(252, 122, 75, 0.8)',
    transform: [
      { rotate: '-15deg' }, 
      { scaleX: 1.5 }, 
    ],
  },
});



