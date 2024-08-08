import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={{
          backgroundColor: "#dee2e6",
          padding: 10,
          borderRadius: 50,
          margin: 20,
          fontSize: 19,
          height: 50,
          width: 130,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Companies
      </Text>
      <TouchableOpacity
        onPressIn={() => navigation.navigate("Module")}
        style={{
          height: 200,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            top: 10,
            marginLeft: "89%",
          }}
        >
          <MaterialIcons name="add-chart" size={25} color="#343a40" />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "orange",
            top: 30,
            marginLeft: "40%",
          }}
        >
          texas
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "blue",
            top: 30,
            marginLeft: "30%",
          }}
        >
          Total Modules 10
        </Text>
        <View style={{ top: 70, marginLeft: 50, flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Created Date:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            July 21, 2024 2:24
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          height: 200,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            top: 10,
            marginLeft: "89%",
          }}
        >
          <MaterialIcons name="add-chart" size={25} color="#343a40" />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "green",
            top: 30,
            marginLeft: "35%",
          }}
        >
          newyork
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "orange",
            top: 30,
            marginLeft: "30%",
          }}
        >
          Total Modules 5
        </Text>
        <View style={{ top: 70, marginLeft: 50, flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Created Date:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            July 21, 2024 2:43
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 200,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            top: 10,
            marginLeft: "89%",
          }}
        >
          <MaterialIcons name="add-chart" size={25} color="#343a40" />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "red",
            top: 30,
            marginLeft: "30%",
          }}
        >
          logangeles
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "green",
            top: 30,
            marginLeft: "30%",
          }}
        >
          Total Modules 0
        </Text>
        <View style={{ top: 70, marginLeft: 50, flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Created Date:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            July 27, 2024 10:52
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 200,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            top: 10,
            marginLeft: "89%",
          }}
        >
          <MaterialIcons name="add-chart" size={25} color="#343a40" />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "blue",
            top: 30,
            marginLeft: "35%",
          }}
        >
          spaces
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "red",
            top: 30,
            marginLeft: "30%",
          }}
        >
          Total Modules 0
        </Text>
        <View style={{ top: 70, marginLeft: 50, flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Created Date:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            July 30, 2024 3:03
          </Text>
        </View>
      </View>

      <View
        style={{
          height: 200,
          width: "90%",
          marginLeft: 18,
          marginRight: 20,
          borderRadius: 20,
          backgroundColor: "#FFF",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            top: 10,
            marginLeft: "89%",
          }}
        >
          <MaterialIcons name="add-chart" size={25} color="#343a40" />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "orange",
            top: 30,
            marginLeft: "20%",
          }}
        >
          boring company
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "green",
            top: 30,
            marginLeft: "30%",
          }}
        >
          Total Modules 0
        </Text>
        <View style={{ top: 70, marginLeft: 50, flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Created Date:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginLeft: 14,
              color: "#6c757d",
            }}
          >
            July 30, 2024 3:03
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
