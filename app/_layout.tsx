import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Image } from "expo-image";
import App from "./App";

export default function Layout() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} />
      <Image
        style={styles.image}
        source={require("../assets/images/bg.png")}
        blurRadius={70}
      />
      <View style={styles.overlay}>
        <App />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1b44", // Background color should be the same as your image to avoid flashing
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
  },
});
