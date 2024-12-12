import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

  const handleSignup = () => {
    navigation.navigate("SIGNUP");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logobibliocorner.png")} style={styles.logo} />
      <Text style={styles.title}>Trouve ton espace, crée ta connexion.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.loginButtonWrapper,
            { backgroundColor: colors.primary },
          ]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signupButtonWrapper]}
          onPress={handleSignup}
        >
          <Text style={styles.signupButtonText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 120,
    width: 100,
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 20,
    textAlign: "center",
    color: colors.primary,
    marginBottom: 40,
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%", 
  },
  loginButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary, 
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
  },
  signupButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary, 
    height: 50,
    borderRadius: 25,
  },
  signupButtonText: {
    color: colors.white,
    fontSize: 18,
  },
});
