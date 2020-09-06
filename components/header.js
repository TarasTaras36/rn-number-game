import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    paddingTop: 27,
    fontSize: 18,
  },
});
export default Header;
