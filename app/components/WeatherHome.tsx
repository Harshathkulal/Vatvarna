import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function WeatherHome() {
  return (
    <View style={styles.box}>
      <View style={styles.CityBox}>
        <Text style={styles.cityName}>Mumbai,</Text>
        <Text style={styles.Country}>India</Text>
      </View>
      <Image
        style={styles.weatherImage}
        source={require("../../assets/images/partlycloudy.png")}
      />
      <Text style={styles.temperature}>25°</Text>
      <Text style={styles.weatherDescription}>Partly Cloudy</Text>

      <View style={styles.otherInfo}>
        <View style={styles.infoItem}>
          <Image
            style={styles.windImage}
            source={require("../../assets/images/wind.png")}
          />
          <Text style={styles.infoText}>10 km/h</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            style={styles.windImage}
            source={require("../../assets/images/drop.png")}
          />
          <Text style={styles.infoText}>60%</Text>
        </View>
        <View style={styles.infoItem}>
          <Image
            style={styles.windImage}
            source={require("../../assets/images/day.png")}
          />
          <Text style={styles.infoText}>06:05 AM</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
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
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
