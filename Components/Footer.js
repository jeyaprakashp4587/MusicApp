/** @format */

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icons } from "../Constants/Const";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const home = useNavigation();
  const search = useNavigation();
  const playlist = useNavigation();
  const setting = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black",
      }}
    >
      <TouchableOpacity onPress={() => home.navigate("home")}>
        <Image source={{ uri: Icons.home }} style={styles.Icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => search.navigate("search")}>
        <FontAwesomeIcon icon={faSearch} color="white" size={25} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => playlist.navigate("playlist")}>
        <Image source={{ uri: Icons.playlist }} style={styles.Icons} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setting.navigate("settings")}>
        <Image source={{ uri: Icons.setting }} style={styles.Icons} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  Icons: {
    width: 30,
    height: 30,
  },
});
