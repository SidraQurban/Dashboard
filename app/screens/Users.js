import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import { Feather } from "react-native-vector-icons";
import Table from "../components/Table";
import { userDataTable as initialUserDataTable } from "../Constant";

const Users = () => {
  const [userDataTable, setUserDataTable] = useState(initialUserDataTable);

  const handleDelete = (index) => {
    Alert.alert(
      "Are you sure you want to delete",
      "By passing Agree button you are proceeding to delete this user. It will no longer be available. If you don't want to delete Press Disagree button",
      [
        {
          text: "Disagree",
          onPress: () => console.log("Disagree Pressed"),
          style: "cancel",
        },
        {
          text: "Agree",
          onPress: () => {
            const newData = userDataTable.filter((_, i) => i !== index);
            setUserDataTable(newData);
          },
          style: "destructive",
        },
      ]
    );
  };
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
      <Table data={userDataTable} onDelete={handleDelete} />
    </View>
  );
};

export default Users;
