import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = ({ title, modules, color, createdDate, navigateTo, isEmpty }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (isEmpty) {
      Alert.alert("Notice", `The ${title} card is empty.`);
    } else if (navigateTo) {
      navigation.navigate(navigateTo);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          height: 200,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
          padding: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <MaterialIcons name="add-chart" size={25} color="#343a40" />
        </View>
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

export default Card;
