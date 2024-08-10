import { View, Text } from "react-native";
import React from "react";
import { Feather } from "react-native-vector-icons";

const Users = () => {
  return (
    <View>
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
            marginLeft: 20,
            top: 60,
          }}
        >
          <Feather name="users" size={30} color="white" />
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text
            style={{ color: "#fff", fontSize: 19, fontWeight: "bold", top: 50 }}
          >
            Users
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Users;
