import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from './components/SearchBar';

export default class WeatherApp extends Component {
  state = {
    weather: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric`
      );
      const data = await response.json();
      this.setState({ weather: data, loading: false });
    } catch (error) {
      this.setState({ error: 'Failed to fetch weather data', loading: false });
    }
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
      <View style={styles.container}>
        <SearchBar onSearch={this.fetchWeather} />
        <Text style={styles.cityName}>London</Text>
        <Text style={styles.temperature}>25°C</Text>
        <Text style={styles.weatherDescription}>
          hot
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  cityName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  weatherDescription: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});