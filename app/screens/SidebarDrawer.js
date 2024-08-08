// src/screens/SidebarDrawer.js
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { EvilIcons, Entypo } from "react-native-vector-icons";

const SidebarDrawer = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 1,
        position: "relative",
      }}
    >
      <TouchableOpacity style={{ padding: 10 }}>
        <Entypo name="menu" size={23} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#9999a1",
          borderRadius: 30,
          width: 40,
          height: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EvilIcons name="user" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SidebarDrawer;
