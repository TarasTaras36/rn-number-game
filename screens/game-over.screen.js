import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../components/card";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.text}>The game is over</Text>
        <Text style={styles.text}>
          Number of rounds: : {props.roundsNumber}
        </Text>
        <Text style={styles.text}>User number was: {props.userNumber}</Text>
        <Button onPress={() => props.onRestart()} title="restart" />
      </Card>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 5,
    padding: 20,
  },
  text: {
    color: Colors.primary,
  },
});
