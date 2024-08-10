import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { cardData } from "../Constant";

const Dashboard = () => {
  return (
    <ScrollView>
      <Header />
      <View>
        <Text
          style={{
            backgroundColor: "#dee2e6",
            padding: 10,
            borderRadius: 50,
            margin: 20,
            fontSize: 19,
            height: 50,
            width: 130,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Companies
        </Text>
      </View>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          modules={card.modules}
          color={card.color}
          createdDate={card.createdDate}
          navigateTo={card.navigateTo}
          isEmpty={card.isEmpty}
        />
      ))}
    </ScrollView>
  );
};

export default Dashboard;
