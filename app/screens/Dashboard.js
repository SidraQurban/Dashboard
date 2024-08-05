import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
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
