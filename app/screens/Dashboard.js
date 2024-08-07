import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Drawer from "../screens/Drawer";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Drawer />

        <Header />
        {/* <Sidebar /> */}
        <Text>Sidebar</Text>
        {/* <Card/> */}
        <Text>Card</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
