import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "./components/SearchBar";
import DailyForecast from "./components/DailyForecast";
import WeatherHome from "./components/WeatherHome";
import { fetchWeatherData } from "./api/weatherService";

export default class WeatherApp extends Component {
  state = {
    weather: null,
    loading: true,
    error: null,
    city: "Bengaluru",
  };

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  fetchWeather = async (city: string) => {
    this.setState({ loading: true });
    const { data, error } = await fetchWeatherData(city);
    if (data) {
      this.setState({ weather: data, loading: false, error: null });
    } else {
      this.setState({ error, loading: false });
    }
  };

  handleSearch = (city: string) => {
    this.setState({ city }, () => this.fetchWeather(city));
  };

  refreshWeather = () => {
    this.fetchWeather("Bengaluru");
  };

  render() {
    const { weather, loading, error } = this.state;

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={this.refreshWeather} style={styles.button}>
            <Text style={styles.buttonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.innerContainer}>
            <SearchBar onSearch={this.handleSearch} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              <WeatherHome weather={weather} />
              <DailyForecast />
            </ScrollView>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 20,
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    marginBottom: 10,
  },
});
