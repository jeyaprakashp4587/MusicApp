/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React, { useRef } from "react";
import { Usedata } from "../Providers";
import { Colors, Icons } from "../Constants/Const";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Ripple from "react-native-material-ripple";
import { useNavigation } from "@react-navigation/native";

const MiniPlayer = () => {
  const { selectedsong, MiniPlayer, setMiniPlayer } = Usedata();
  const navigation = useNavigation();
  // liked heart functions
  const likedHeart = useRef(null);
  const heart = useRef(null);
  return (
    <View
      style={{
        borderWidth: 1,
        width: "100%",
        height: 80,
        backgroundColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        columnGap: 20,
        borderRadius: 20,
        position: "absolute",
        bottom: 0,
        borderBottomEndRadius: 0,
        borderBottomLeftRadius: 0,
        display: MiniPlayer === true ? "flex" : "none",
      }}
      ref={null}
    >
      <View>
        <Image
          source={{ uri: selectedsong.img }}
          style={{ width: 50, height: 50, borderRadius: 5 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontSize: 18,
            // fontWeight: "600",
            letterSpacing: 0.5,
          }}
          numberOfLines={1}
        >
          {selectedsong.name} from ({selectedsong.from})
        </Text>
        <Text
          style={{
            color: Colors.primary,
            fontSize: 15,
          }}
        >
          Now Playing ...
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          columnGap: 10,
        }}
      >
        <Ripple
          onPress={() => {
            navigation.navigate("player"), setMiniPlayer(false);
          }}
        >
          <Image
            source={{ uri: Icons.expand }}
            style={{ width: 20, height: 20 }}
          />
        </Ripple>
        <Image
          source={{ uri: Icons.dots }}
          style={{ width: 22, height: 22 }}
          ref={heart}
        />
        <FontAwesomeIcon
          icon={faHeart}
          size={24}
          color="green"
          ref={likedHeart}
          style={{ display: "none" }}
        />
      </View>
    </View>
  );
};

export default MiniPlayer;

const styles = StyleSheet.create({});
