import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SnapshotViewIOSComponent,
} from "react-native";
const rock = require("./signs/rock.png");
const paper = require("./signs/paper.png");
const scissors = require("./signs/scissors.png");

const Playscreen = (props) => {
  console.log(props);
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    if (counter === 0) return;
    const timer = setTimeout(() => {
      setCounter((prv) => prv - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);
  const terminate = () => {
    props.leaveGame();
  };
  const randomImage = () => {
    const imageSet = [rock, paper, scissors];
    const index = Math.floor(Math.random() * 3);
    return imageSet[index];
  };
  const bgColor = ["#8e44ad", "#e67e22", "#34495e"];

  return (
    <View
      style={StyleSheet.compose(
        { backgroundColor: bgColor[counter - 1] },
        styles.container
      )}
    >
      {counter < 1 ? (
        <>
          {" "}
          <Image style={styles.sign} source={randomImage()} />
          <View style={styles.button}>
            <Button title="Play again" onPress={() => setCounter(3)} />
            <View style={styles.button2}>
              <Button title="Exit" onPress={() => terminate()} />
            </View>
          </View>
        </>
      ) : (
        <Text style={styles.counter}>{counter}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 150,
    color: "black",
  },
  sign: {
    width: 220,
    height: 220,
  },
  button: {
    position: "absolute",
    bottom: 40,
  },
  button2: {
    position: "absolute",
    bottom: 40,
  },
});
export default Playscreen;
