import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import logo from "../../assets/Nubank_Logo.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={logo} />
        <Text>João</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: "40px 0 30px",
  },
  top: {
    flexDirection: "row",
    alingItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
