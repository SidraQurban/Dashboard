// src/screens/Dashboard.js
import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Home";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Home /> */}
        <Text>Sidebar</Text>
        <Text>Card</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
