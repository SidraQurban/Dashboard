// src/navigators/AppNavigator.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Dashboard from "../screens/Dashboard";
import CustomDrawerContent from "../screens/CustomDrawerContent";
import Users from "../screens/Users";
import RegisterUser from "../screens/RegisterUser";
import AddCompany from "../screens/AddCompany";
import AddModule from "../screens/AddModule";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        drawerActiveTintColor: "#adb5bd",
        drawerLabelStyle: {
          fontSize: 20,
          top: 20,
        },
        drawerContentStyle: {
          backgroundColor: "black",
        },
      }}
    />
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Register User" component={RegisterUser} />
    <Drawer.Screen name="Add Company" component={AddCompany} />
    <Drawer.Screen name="Add Module" component={AddModule} />
  </Drawer.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
