import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  EvilIcons,
  FontAwesome6,
  MaterialIcons,
} from "react-native-vector-icons";

const Header = () => {
  return (
    <>
      {/* Header component */}
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#234d51",
          flexDirection: "row",
          padding: 20,
          position: "relative",
        }}
      >
        <View
          style={{
            backgroundColor: "#9999a1",
            borderRadius: 30,
            width: 55,
            height: 55,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 20,
            top: 25,
          }}
        >
          <FontAwesome6 name="user-large" size={30} color="white" />
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text
            style={{ color: "#fff", fontSize: 20, fontWeight: "bold", top: 17 }}
          >
            Welcome back, Umer!
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
              top: 15,
            }}
          >
            <EvilIcons
              name="bell"
              size={25}
              color="#ced4da"
              style={{ marginTop: 5 }}
            />
            <Text style={{ color: "#ced4da", marginLeft: 5 }}>superadmin</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#abb2b7",
            height: 45,
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 20,
            position: "absolute",
            bottom: 0,
            left: 40,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 15 }}>SGP Technologies</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
