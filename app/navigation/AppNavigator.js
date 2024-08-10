import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import CustomDrawerContent from "../screens/CustomDrawerContent";
import Users from "../screens/Users";
import RegisterUser from "../screens/RegisterUser";
import AddCompany from "../screens/AddCompany";
import AddModule from "../screens/AddModule";
import Module from "../screens/Module";
import Logout from "../screens/Logout";
import Logs from "../screens/Logs";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerRight: () => (
        <View style={{ marginRight: -7, top: -19 }}>
          <Logout />
        </View>
      ),
      headerStyle: {
        backgroundColor: "#fff",
      },
    }}
  >
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Users" component={Users} />
    <Drawer.Screen name="Register User" component={RegisterUser} />
    <Drawer.Screen name="Add Company" component={AddCompany} />
    <Drawer.Screen name="Add Module" component={AddModule} />
    <Drawer.Screen name="Module" component={Module} />
    <Drawer.Screen name="Logs" component={Logs} />
  </Drawer.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        <Stack.Screen name="Module" component={Module} />
        <Stack.Screen name="Logs" component={Logs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
