import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons, Entypo, FontAwesome6 } from "react-native-vector-icons";

const Header = () => {
  return (
    <>
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
      <View
        style={{
          width: "100%",
          height: 200,
          backgroundColor: "#0C2527",
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
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
          }}
        >
          <FontAwesome6 name="user-large" size={30} color="white" />
        </View>
        <View style={{ marginLeft: 15, flex: 1, flexDirection: "column" }}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
            Welcome back, Umer!
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <EvilIcons
              name="bell"
              size={30}
              color="white"
              style={{ marginTop: 5 }}
            />
            <Text style={{ color: "#fff" }}>superadmin</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
