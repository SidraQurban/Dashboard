import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  EvilIcons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

const RegisterUser = ({ route }) => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  const handleSave = () => {
    const newUser = { name, email, password, role, company };
    navigation.navigate("Users", { newUser }); // Pass the new user data back to the Users screen
  };

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "90%",
        width: "85%",
        borderRadius: 15,
        top: 5,
        margin: 30,
        paddingTop: 20,
      }}
    >
      <EvilIcons
        name="user"
        size={40}
        style={{ top: 40, marginLeft: 16, color: "#6c757d" }}
      />

      <View style={{ marginBottom: 12, marginLeft: 76 }}>
        <View
          style={{
            width: "90%",
            height: 48,
            borderColor: "#6c757d",
            borderWidth: 1,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="User Name *"
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
            onChangeText={setName}
          />
        </View>
      </View>
      <MaterialCommunityIcons
        name="email-outline"
        size={30}
        style={{ top: 40, marginLeft: 16, color: "#6c757d" }}
      />
      <View style={{ marginBottom: 12, marginLeft: 76 }}>
        <View
          style={{
            width: "90%",
            height: 48,
            borderColor: "#6c757d",
            borderWidth: 1,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="EMAIL *"
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <MaterialCommunityIcons
        name="lock-outline"
        size={30}
        style={{ top: 40, marginLeft: 16, color: "#6c757d" }}
      />
      <View style={{ marginBottom: 12, marginLeft: 76 }}>
        <View
          style={{
            width: "90%",
            height: 48,
            borderColor: "#6c757d",
            borderWidth: 1,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Password *"
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
      </View>

      <Feather
        name="users"
        size={30}
        style={{ top: 40, marginLeft: 16, color: "#6c757d" }}
      />
      <View style={{ marginBottom: 12, marginLeft: 76 }}>
        <View
          style={{
            width: "90%",
            height: 48,
            borderColor: "#6c757d",
            borderWidth: 1,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Select Role"
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
            onChangeText={setRole}
          />
        </View>
      </View>
      <MaterialIcons
        name="add-chart"
        size={30}
        style={{ top: 40, marginLeft: 16, color: "#6c757d" }}
      />
      <View style={{ marginBottom: 22, marginLeft: 76 }}>
        <View
          style={{
            width: "90%",
            height: 48,
            borderColor: "#6c757d",
            borderWidth: 1,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            placeholder="Select Company"
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
            onChangeText={setCompany}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: "80%",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()} // Go back without saving
            style={{
              backgroundColor: "grey",
              width: 70,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 15 }}>CLOSE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSave} // Save the new user and navigate back
            style={{
              backgroundColor: "green",
              width: 70,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 15 }}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterUser;
