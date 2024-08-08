// src/screens/Dashboard.js
import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./Home";
import Header from "../components/Header";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <ScrollView>
      <Header />
      <Card />
    </ScrollView>
  );
};

export default Dashboard;
