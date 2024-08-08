// src/screens/Home.js
import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SidebarDrawer from "./SidebarDrawer";

const Home = () => {
  return (
    <SafeAreaView>
      <SidebarDrawer />
      <Header />
    </SafeAreaView>
  );
};

export default Home;
