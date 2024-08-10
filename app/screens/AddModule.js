import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddModule = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "65%",
        width: "85%",
        borderRadius: 15,
        top: 50,
        margin: 30,
        paddingTop: 20,
      }}
    >
      <MaterialIcons
        name="add-chart"
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
            placeholder="Select Company "
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
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
            placeholder="Module Name * "
            placeholderTextColor="#adb5bd"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
          />
        </View>
      </View>
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
            placeholder="Head Name *"
            placeholderTextColor="#adb5bd"
            keyboardType="email-address"
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
          />
        </View>
      </View>

      {/* <MaterialIcons name="add-chart" size={25} color="#343a40" /> */}

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
            onPress={() => navigation.navigate("Dashboard")}
            style={{
              backgroundColor: "grey",
              width: 70,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
              }}
            >
              CLOSE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("Save pressed")}
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
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
              }}
            >
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddModule;
