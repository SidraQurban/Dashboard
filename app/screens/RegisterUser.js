import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import React, { useState } from "react";

const RegisterUser = () => {
  const [ispassShown, setIsPassShown] = useState(true);

  return (
    <View
      style={{
        backgroundColor: "#dee2e6",
        height: "80%",
        width: "95%",
        borderRadius: 40,
        top: 50,
        margin: 10,
        paddingTop: 100,
      }}
    >
      <View style={{ marginBottom: 22, marginLeft: 32 }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 400,
            marginVertical: 8,
            marginBottom: 12,
            color: "#6c757d",
          }}
        >
          Email address
        </Text>

        <View
          style={{
            width: "80%",
            height: 48,
            borderColor: "#6c757d",
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="EMAIL"
            placeholderTextColor="#adb5bd"
            keyboardType="email-address"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
          />
        </View>
      </View>
      <View style={{ marginBottom: 12, marginLeft: 32 }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 400,
            marginVertical: 8,
            color: "#6c757d",
            marginBottom: 12,
          }}
        >
          Password
        </Text>

        <View
          style={{
            width: "80%",
            height: 48,
            borderColor: "red",
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Password *"
            placeholderTextColor="red"
            secureTextEntry={ispassShown}
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
          />
          <TouchableOpacity
            onPress={() => setIsPassShown(!ispassShown)}
            style={{ position: "absolute", right: 12 }}
          >
            {ispassShown == true ? (
              <Ionicons name="eye-off" size={24} color={"#adb5bd"} />
            ) : (
              <Ionicons name="eye" size={24} color={"#adb5bd"} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#dee2e6",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          marginLeft: 22,
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: "#adb5bd",
            fontSize: 20,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterUser;
