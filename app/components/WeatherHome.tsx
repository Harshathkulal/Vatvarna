import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Weather = {
  name: string;
  sys: {
    country: string;
    sunrise: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

type WeatherHomeProps = {
  weather: Weather | null;
};

export default function WeatherHome({ weather }: WeatherHomeProps) {
  if (!weather) return null;

  const { name, sys, main, weather: weatherDetails, wind } = weather;
  const weatherInfo = weatherDetails[0];

  return (
    <View style={styles.box}>
      <View style={styles.CityBox}>
        <Text style={styles.cityName}>{name},</Text>
        <Text style={styles.Country}>{sys.country}</Text>
      </View>
      <Image
        style={styles.weatherImage}
        source={require("../../assets/images/partlycloudy.png")}
      />
      <Text style={styles.temperature}>{Math.round(main.temp)}°C</Text>
      <Text style={styles.weatherDescription}>{weatherInfo.description}</Text>

      <View style={styles.otherInfo}>
        <View style={styles.infoItem}>
          <Image
            style={styles.windImage}
            source={require("../../assets/images/wind.png")}
          />
          <Text style={styles.infoText}>{wind.speed} km/h</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            style={styles.windImage}
            source={require("../../assets/images/drop.png")}
          />
          <Text style={styles.infoText}>{main.humidity}%</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            style={styles.windImage}
            source={require("../../assets/images/day.png")}
          />
          <Text style={styles.infoText}>
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  CityBox: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  Country: {
    fontSize: 28,
    color: "#D3D3D3",
  },
  cityName: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#ffffff",
  },
  weatherImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  windImage: {
    width: 20,
    height: 20,
  },
  temperature: {
    fontSize: 60,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#ffffff",
  },
  weatherDescription: {
    fontSize: 18,
    color: "#D3D3D3",
  },
  otherInfo: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    fontSize: 20,
    color: "#D3D3D3",
    marginLeft: 5,
  },
});
