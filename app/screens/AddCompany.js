import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddCompany = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "40%",
        width: "85%",
        borderRadius: 15,
        top: 90,
        margin: 30,
        paddingTop: 20,
      }}
    >
      <MaterialIcons
        name="add-chart"
        size={30}
        style={{ top: 60, marginLeft: 16, color: "#6c757d" }}
      />
      <View style={{ marginBottom: 22, marginLeft: 76, top: 15 }}>
        <View
          style={{
            width: "80%",
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
            style={{ width: "100%", marginLeft: "10%", fontSize: 17 }}
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
            onPress={() => navigation.goBack()}
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
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "#0C2527",
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

export default AddCompany;
