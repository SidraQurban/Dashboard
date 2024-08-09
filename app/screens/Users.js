import { View, Text } from "react-native";
import React from "react";
import { EvilIcons, AntDesign } from "react-native-vector-icons";
import Table from "../components/Table";

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
            // borderRadius: 30,
            // width: 55,
            // height: 55,
            // justifyContent: "center",
            // alignItems: "center",
            marginLeft: 20,
            top: 30,
          }}
        >
          <AntDesign name="logout" size={30} color="white" />
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text
            style={{ color: "#fff", fontSize: 20, fontWeight: "bold", top: 30 }}
          >
            Log's for
          </Text>
          {/* <View
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
          </View> */}
        </View>
        {/* <View
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
        </View> */}
      </View>
      <Table />
    </View>
  );
};

export default Users;
