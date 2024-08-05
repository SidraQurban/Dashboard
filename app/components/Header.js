import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons, Entypo, FontAwesome6 } from "react-native-vector-icons";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon}>
          <Entypo name="menu" size={23} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userIcon}>
          <EvilIcons name="user" size={34} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.welcomeContainer}>
        <View style={styles.profileIcon}>
          <FontAwesome6 name="user-large" size={30} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome back, Umer!</Text>
          <View style={styles.bellContainer}>
            <EvilIcons
              name="bell"
              size={25}
              color="#ced4da"
              style={styles.bellIcon}
            />
            <Text style={styles.superadminText}>superadmin</Text>
          </View>
        </View>
        <View style={styles.sgpContainer}>
          <Text style={styles.sgpText}>SGP Technologies</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 1,
    position: "relative",
  },
  menuIcon: {
    padding: 10,
  },
  userIcon: {
    backgroundColor: "#9999a1",
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#234d51",
    flexDirection: "row",
    padding: 20,
    position: "relative",
  },
  profileIcon: {
    backgroundColor: "#9999a1",
    borderRadius: 30,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    top: 25,
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    top: 17,
  },
  bellContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    top: 15,
  },
  bellIcon: {
    marginTop: 5,
  },
  superadminText: {
    color: "#ced4da",
    marginLeft: 5,
  },
  sgpContainer: {
    backgroundColor: "#abb2b7",
    height: 45,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 40,
  },
  sgpText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default Header;
