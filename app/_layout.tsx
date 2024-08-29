import React from "react";
import { View, StyleSheet } from "react-native";

import App from "./App";
import { Image } from "expo-image";

export default function Layout() {
  return (
    <View style={styles.background}>
      <Image 
        style={styles.image} 
        source={require("../assets/images/bg.png")} 
        blurRadius={70}
      />
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1e1b44",
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
