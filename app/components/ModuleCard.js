import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ModuleCard = ({ title, color, name }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Logs", { title })}
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
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: color,
            }}
          >
            {title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 36,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15 }}>Head Name: </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ModuleCard;
