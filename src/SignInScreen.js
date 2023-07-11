import React from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgUri } from "react-native-svg";


const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Sign In</Text>
      <Text style={styles.phoneNumberLabel}>Your phone number</Text>
      <View style={styles.form}>
      <SvgUri uri={require("../assets/kenya.svg")} width={200} height={200} />
        <TextInput
          style={styles.phoneNumberInput}  placeholder="Enter phone number"/>
      </View>
      <LinearGradient
        colors={["#ff555f", "#ffde17"]}  style={styles.signInButton}>
        <TouchableOpacity>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  phoneNumberLabel: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  signInButton: {
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  signInText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SignInScreen;
