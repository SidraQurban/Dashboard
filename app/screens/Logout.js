// src/screens/Home.js
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EvilIcons, MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Logout = () => {
  const navigation = useNavigation();
  const [showLogout, setShowLogout] = useState(false);
  return (
    <>
      {/* Logout component */}
      <View style={{ position: "absolute", top: 20, right: 20 }}>
        <View
          style={{
            backgroundColor: "#9999a1",
            borderRadius: 30,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
            bottom: 25,
          }}
        >
          <TouchableOpacity onPress={() => setShowLogout(!showLogout)}>
            <EvilIcons name="user" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {showLogout && (
        <View
          style={{
            position: "absolute",
            top: 49,
            right: 20,
            backgroundColor: "#fff",
            borderRadius: 10,
            padding: 10,
            shadowOffset: { width: 0, height: 2 },
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              padding: 10,
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="logout" size={20} />
            <Text style={{ color: "#000", fontSize: 16, marginLeft: 5 }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Logout;
