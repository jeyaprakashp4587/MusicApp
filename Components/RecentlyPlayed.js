/** @format */

import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Colors, Fonts, useSongRouter } from "../Constants/Const";
import { Usedata } from "../Providers";
import Ripple from "react-native-material-ripple";

const RecentlyPlayed = () => {
  const { RecentlyPlayedSongs } = Usedata();
  const { songRouterFunction } = useSongRouter();
  return (
    <View
      style={{
        // borderColor: "blue",
        borderWidth: 1,
        marginTop: 20,
        height: 240,
        rowGap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Colors.white,
            fontSize: Fonts.head_size,
            fontWeight: Fonts.weight,
            fontFamily: "Poppins",
          }}
        >
          Recently Played
        </Text>
        <Text style={{ color: Colors.grey, fontSize: Fonts.small_size }}>
          See All...
        </Text>
      </View>
      <ScrollView horizontal>
        {RecentlyPlayedSongs.map((items, index) => (
          <Ripple onPress={() => songRouterFunction(items)}>
            <View
              key={index}
              style={{
                borderWidth: 1,
                borderColor: "black",
                marginRight: 15,
                width: 130,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={{ uri: items.img }}
                style={{
                  width: "100%",
                  height: "75%",
                  borderRadius: 10,
                  resizeMode: "cover",
                }}
              />
              <Text
                style={{ color: Colors.white, fontSize: Fonts.small_size }}
                numberOfLines={1}
              >
                {items.name}
              </Text>
            </View>
          </Ripple>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentlyPlayed;

const styles = StyleSheet.create({});
