// src/screens/Home.js
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ModuleCard = ({ title, modules, color, createdDate }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        // onPress={() => navigation.navigate("Module", { title, modules })}
        style={{
          height: 160,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
          padding: 20,
        }}
      >
        <View
          style={{ flexDirection: "row", justifyContent: "flex-end" }}
        ></View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: color,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "blue",
              marginTop: 10,
            }}
          >
            Total Modules {modules}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15 }}>Created Date:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            {createdDate}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModuleCard;
