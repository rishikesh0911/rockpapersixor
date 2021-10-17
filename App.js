import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Playscreen from "./src/Playscreen";
export default function App() {
  const [play, setPlay] = useState(false);
  const exitGame = () => {
    setPlay(false);
  };
  const Welcome = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Rock Paper Scissors</Text>
        <Text style={{ fontSize: 70 }}>✊✋✌️</Text>
        <View style={styles.button}>
          {" "}
          <Button title="PLAY" onPress={() => setPlay(true)} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  };
  return play ? <Playscreen leaveGame={exitGame} /> : <Welcome />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    width: 250,
  },
});
