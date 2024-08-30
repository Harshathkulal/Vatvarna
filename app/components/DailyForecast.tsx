import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";

export class DailyForecast extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.containerheader}>
          <Ionicons name="calendar-outline" size={20} color="white" />
          <Text style={styles.headerText}>Daily forecast</Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.Wraper}>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/partlycloudy.png")}
            />
            <Text style={styles.infoText}>Monday</Text>
            <Text style={styles.TextTemp}>25°</Text>
          </View>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/heavyrain.png")}
            />
            <Text style={styles.infoText}>Tuesday</Text>
            <Text style={styles.TextTemp}>22°</Text>
          </View>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/sun.png")}
            />
            <Text style={styles.infoText}>Wednesday</Text>
            <Text style={styles.TextTemp}>26°</Text>
          </View>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/sun.png")}
            />
            <Text style={styles.infoText}>Thursday</Text>
            <Text style={styles.TextTemp}>27°</Text>
          </View>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/sun.png")}
            />
            <Text style={styles.infoText}>Friday</Text>
            <Text style={styles.TextTemp}>20°</Text>
          </View>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/sun.png")}
            />
            <Text style={styles.infoText}>Saturday</Text>
            <Text style={styles.TextTemp}>30°</Text>
          </View>
          <View style={styles.Forecastcontainer}>
            <Image
              style={styles.windImage}
              source={require("../../assets/images/sun.png")}
            />
            <Text style={styles.infoText}>Sunday</Text>
            <Text style={styles.TextTemp}>30°</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DailyForecast;

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    gap: 10,
    paddingBottom: 30,
  },
  containerheader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    fontSize: 15,
    color: "#D3D3D3",
  },
  Wraper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  Forecastcontainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    height: 100,
    width: 80,
  },
  windImage: {
    width: 30,
    height: 30,
  },
  infoText: {
    fontSize: 13,
    color: "#D3D3D3",
    marginVertical: 4,
    textAlign: "center",
  },
  TextTemp: {
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
});
