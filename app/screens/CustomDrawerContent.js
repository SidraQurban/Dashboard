import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  EvilIcons,
} from "react-native-vector-icons";

import Icon from "react-native-vector-icons/FontAwesome";

const CustomDrawerContent = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");
  const handlePress = (screen) => {
    setActiveItem(screen);
    props.navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "#234d51", height: 80 }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
              marginRight: 25,
              bottom: 2,
            }}
          />
          <View>
            <Text style={{ fontSize: 18, color: "#fff" }}>SGP</Text>
            <Text style={{ fontSize: 18, color: "#fff" }}>Technologies</Text>
          </View>
          <View style={{ marginLeft: "auto", marginRight: 10 }}>
            <Icon
              name="bars"
              size={20}
              color="#fff"
              onPress={() => props.navigation.toggleDrawer()}
            />
          </View>
        </View>
      </View>

      <View style={{ padding: 30, width: "100%" }}>
        <Text style={{ color: "#6c757d", marginBottom: 10 }}>MENUS</Text>

        {/* Dashboard */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor:
              activeItem === "Dashboard" ? "#ced4da" : "transparent",
            borderRadius: 6,
          }}
          onPress={() => handlePress("Dashboard")}
        >
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={24}
            color={activeItem === "Dashboard" ? "#343a40" : "#6c757d"}
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 17,
              color: activeItem === "Dashboard" ? "#212529" : "#6c757d",
              // Add vertical padding
            }}
          >
            Dashboard
          </Text>
        </TouchableOpacity>

        {/* Users */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: activeItem === "Users" ? "#ced4da" : "transparent",
            borderRadius: 6,
          }}
          onPress={() => handlePress("Users")}
        >
          <Feather
            name="users"
            size={24}
            color={activeItem === "Users" ? "#343a40" : "#6c757d"}
            style={{ marginRight: 20 }}
          />
          <Text
            style={{
              fontSize: 17,
              color: activeItem === "Users" ? "#212529" : "#6c757d",
              marginLeft: 0,
            }}
          >
            Users
          </Text>
        </TouchableOpacity>

        {/* Add (with expandable submenu) */}
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 10,
              backgroundColor: activeItem === "Add" ? "#ced4da" : "transparent",
              borderRadius: 6,
            }}
          >
            <MaterialIcons
              name="add-to-photos"
              size={18}
              color="#6c757d"
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 16, color: "#6c757d" }}>Add</Text>
            <EvilIcons
              name={isExpanded ? "chevron-up" : "chevron-down"}
              color="#6c757d"
              size={35}
              style={{ marginLeft: "auto" }}
            />
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <View style={{ marginLeft: 7 }}>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor:
                  activeItem === "Registe rUser" ? "#ced4da" : "transparent",
                borderRadius: 6,
              }}
              onPress={() => handlePress("Register User")}
            >
              <EvilIcons
                name="user"
                size={28}
                color={activeItem === "Register User" ? "#343a40" : "#6c757d"}
                style={{ marginRight: 20 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: activeItem === "Register User" ? "#212529" : "#6c757d",
                  marginLeft: 0,
                }}
              >
                Register User
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor:
                  activeItem === "Add Company" ? "#ced4da" : "transparent",
                borderRadius: 6,
              }}
              onPress={() => handlePress("Add Company")}
            >
              <MaterialIcons
                name="add-chart"
                size={25}
                color={activeItem === "Add Company" ? "#343a40" : "#6c757d"}
                style={{ marginRight: 20 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: activeItem === "Add Company" ? "#212529" : "#6c757d",
                  marginLeft: 0,
                }}
              >
                Add Company
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
                backgroundColor:
                  activeItem === "Add Module" ? "#ced4da" : "transparent",
                borderRadius: 6,
              }}
              onPress={() => handlePress("Add Module")}
            >
              <Icon
                name="tasks"
                color={activeItem === "Add Module" ? "#343a40" : "#6c757d"}
                size={25}
                style={{ marginRight: 20 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: activeItem === "Add Module" ? "#212529" : "#6c757d",
                  marginLeft: 0,
                }}
              >
                Add Module
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
