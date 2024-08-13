import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import { Ionicons, Entypo } from "react-native-vector-icons";

const LogsTable = ({ data }) => {
  const route = useRoute();
  const { title } = route.params;

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
      <ScrollView style={{ flex: 1 }}>
        <ScrollView horizontal={true}>
          <View>
            <DataTable style={{ padding: 15 }}>
              <DataTable.Header
                style={{ backgroundColor: "#F8F8F8", height: 60 }}
              >
                <DataTable.Title style={{ width: 200 }}>
                  <Text style={{ color: "black", fontSize: 14 }}>COMPANY</Text>
                </DataTable.Title>
                <DataTable.Title style={{ width: 200 }}>
                  <Text style={{ color: "black", fontSize: 14 }}>MODULE</Text>
                </DataTable.Title>
                <DataTable.Title style={{ width: 200 }}>
                  <Text style={{ color: "black", fontSize: 14 }}>LOGS</Text>
                </DataTable.Title>
                <DataTable.Title style={{ width: 300 }}>
                  <Text style={{ color: "black", fontSize: 14 }}>
                    CREATED ON
                  </Text>
                </DataTable.Title>
                <DataTable.Title style={{ width: 100 }}>
                  <Text style={{ color: "black", fontSize: 14 }}>VIDEO</Text>
                </DataTable.Title>
              </DataTable.Header>

              {data.map((item, index) => (
                <DataTable.Row
                  key={index}
                  style={{ height: 70, backgroundColor: "#fff" }}
                >
                  <DataTable.Cell style={{ width: 200 }}>
                    <Text style={{ fontSize: 16 }}>{item.company}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{ width: 200 }}>
                    <Text style={{ fontSize: 16 }}>{title}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{ width: 200 }}>
                    <Entypo name="back-in-time" size={25} color="black" />
                  </DataTable.Cell>
                  <DataTable.Cell style={{ width: 300 }}>
                    <Text style={{ fontSize: 16 }}>{item.createdOn}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{ width: 100 }}>
                    <TouchableOpacity>
                      <Ionicons name="eye-outline" size={25} />
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </View>
        </ScrollView>

        <View style={{ marginTop: 20 }}>
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i}></Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LogsTable;
