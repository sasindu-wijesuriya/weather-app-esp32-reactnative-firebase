import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import { db, ref, onValue } from "../firebaseData";

const Weather = () => {
  const [temperatureValue, setTemperatureValue] = useState(0);
  const [humidityValue, setHumidityValue] = useState(0);
  const [pressureValue, setPressureValue] = useState(0);

  useEffect(() => {
    const dbRef = ref(db);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setTemperatureValue(data.temperatureData);
      setHumidityValue(data.humidityData);
      setPressureValue(data.pressureData);
    });
  }, [db]);

  return (
    <ImageBackground
      source={require("../assets/background1.png")}
      style={styles.container}
    >
      <View style={styles.temperatureWrapper}>
        <Text style={styles.tempText}>{temperatureValue} °F</Text>
      </View>
      <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.humidity}>
            <Text style={styles.dataValue}>{humidityValue}%</Text>
            <Text style={styles.dataText}>Humidity</Text>
          </View>
          <View style={styles.pressure}>
            <Text style={styles.dataValue}>{pressureValue} hPa</Text>
            <Text style={styles.dataText}>Pressure</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  temperatureWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  tempText: {
    fontSize: 120,
    color: "#fff",
    fontWeight: "100",
    textAlign: "right",
    marginRight: "10%",
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spacer: {
    height: "10%",
  },
  dataWrapper: {
    height: "30%",
    width: "90%",
    padding: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  humidity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pressure: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dataValue: {
    fontSize: 30,
    color: "#fff",
  },
  dataText: {
    fontSize: 20,
    color: "#fff",
  },
});
