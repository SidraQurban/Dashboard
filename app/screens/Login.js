import { Image, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#0C2527",
      }}
    >
      <View style={{ paddingBottom: 90, alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 70,
              height: 70,
              resizeMode: "contain",
              marginRight: 11,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "grey" }}>
              SGP
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "grey" }}>
              Technologies
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: "70%",
          width: "100%",
          borderTopLeftRadius: 100,
          
          paddingTop: 100,
        }}
      ></View>
    </SafeAreaView>
  );
};

export default Login;
