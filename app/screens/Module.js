import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const Module = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Header />
      <Text
        style={{
          backgroundColor: "#dee2e6",
          padding: 5,
          borderRadius: 50,
          margin: 20,
          fontSize: 19,
          height: 40,
          textAlign: "center",
          width: 100,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Modules
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Dashboard")}
        style={{
          backgroundColor: "#0C2527",
          borderRadius: 50,
          margin: 10,
          width: 80,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 19,
            alignItems: "center",
            padding: 10,
          }}
        >
          Back
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Module;
