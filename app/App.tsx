import React, { Component } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import SearchBar from "./components/SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import DailyForecast from "./components/DailyForecast";
import WeatherHome from "./components/WeatherHome";

export default class WeatherApp extends Component {
  state = {
    weather: null,
    loading: true,
    error: null,
    city: "London", // Default city
  };

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  fetchWeather = async (city:string) => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await response.json();
      this.setState({ weather: data, loading: false });
    } catch (error) {
      this.setState({ error: "Failed to fetch weather data", loading: false });
    }
  };

  handleSearch = (city:string) => {
    this.setState({ city }, () => this.fetchWeather(city));
  };

  render() {
    const { weather, loading, error } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <SearchBar onSearch={this.handleSearch} />
        <WeatherHome />
        <DailyForecast />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    padding: 10,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
