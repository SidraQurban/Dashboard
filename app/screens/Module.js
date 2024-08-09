import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ModuleCard from "../components/ModuleCard";
import { useNavigation } from "@react-navigation/native";
import { ModulesData } from "../Constant";

const Module = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
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
          marginTop: -7,
          backgroundColor: "#234d51",
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

      {ModulesData.map((card, index) => (
        <ModuleCard
          key={index}
          title={card.title}
          modules={card.modules}
          color={card.color}
          createdDate={card.createdDate}
        />
      ))}
    </ScrollView>
  );
};

export default Module;
