import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Table = ({ data, onDelete }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 30,
        marginLeft: 20,
        paddingHorizontal: 10,
        height: "100%",
        width: "100%",
      }}
    >
      <ScrollView>
        <ScrollView horizontal={true}>
          <DataTable style={{ padding: 15 }}>
            <DataTable.Header
              style={{ backgroundColor: "#F8F8F8", height: 60 }}
            >
              <DataTable.Title style={{ width: 150 }}>
                <Text style={{ color: "black", fontSize: 14 }}>NAME</Text>
              </DataTable.Title>
              <DataTable.Title style={{ width: 250 }}>
                <Text style={{ color: "black", fontSize: 14 }}>EMAIL</Text>
              </DataTable.Title>
              <DataTable.Title style={{ width: 150 }}>
                <Text style={{ color: "black", fontSize: 14 }}>ROLE</Text>
              </DataTable.Title>
              <DataTable.Title style={{ width: 150 }}>
                <Text style={{ color: "black", fontSize: 14 }}>COMPANY</Text>
              </DataTable.Title>
              <DataTable.Title style={{ width: 100 }}>
                <Text style={{ color: "black", fontSize: 14 }}>ACTION</Text>
              </DataTable.Title>
            </DataTable.Header>

            {data.map((item, index) => (
              <DataTable.Row
                key={index}
                style={{ height: 70, backgroundColor: "#fff" }}
              >
                <DataTable.Cell style={{ width: 150 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    {item.name}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ width: 250 }}>
                  <Text style={{ fontSize: 15 }}>{item.email}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ width: 150 }}>
                  <Text style={{ fontSize: 15 }}>{item.role}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ width: 150 }}>
                  <Text style={{ fontSize: 15 }}>{item.company}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{ width: 100 }}>
                  <TouchableOpacity onPress={() => onDelete(index)}>
                    <MaterialCommunityIcons
                      name="delete-outline"
                      size={25}
                      color="#d62828"
                    />
                  </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
        {/* Additional vertical content */}
        <View style={{ marginTop: 20 }}>
          {/* Add more content to ensure vertical scrolling */}
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i}></Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;
