import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        placeholderTextColor={"#D3D3D3"}
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Ionicons name="search" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    alignItems: "center",
    padding: 5,
  },
  input: {
    flex: 1,
    padding: 10,
    color: "#fff",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});
