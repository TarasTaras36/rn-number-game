import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "../components/card";
import Colors from "../constants/colors";
import Input from "../components/input";
import NumberContainer from "../components/number-container";

const StartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const resetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chousenNumber = parseInt(enteredValue);
    if (isNaN(chousenNumber) || chousenNumber <= 0) {
      Alert.alert("number has to be valid", "sorry", [
        { text: "okay", style: "destructive", onPress: resetInput },
      ]);
      return null;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };
  const numberInputHandler = (number) => {
    setEnteredValue(number.replace(/[^0-9]/g, ""));
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Your are select</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          color={Colors.darkGreen}
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            blurOnSubmit
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={() => {}}
                color="white"
                onPress={resetInput}
              />
            </View>
            <View style={{ ...styles.button, backgroundColor: "#12355B" }}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color="white"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    marginVertical: 10,
    fontSize: 30,
  },
  inputContainer: {
    backgroundColor: "#EBEBEB",
    borderRadius: 8,
    padding: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#59C3C3",
    width: 100,
    borderRadius: 5,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
});

export default StartScreen;
