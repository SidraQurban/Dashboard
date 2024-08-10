import { View, Text } from "react-native";
import React from "react";
import { Entypo, AntDesign } from "react-native-vector-icons";
import { useRoute } from "@react-navigation/native";

const Logs = () => {
  const route = useRoute();
  const { title } = route.params;
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
          <Entypo name="back-in-time" size={30} color="white" />
        </View>
        <View style={{ marginLeft: 15, flex: 1 }}>
          <Text
            style={{ color: "#fff", fontSize: 19, fontWeight: "bold", top: 50 }}
          >
            Logs For {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Logs;
