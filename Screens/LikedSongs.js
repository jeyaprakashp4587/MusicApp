/** @format */

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors, Fonts, Icons } from "../Constants/Const";
import { LinearGradient } from "expo-linear-gradient";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BlurView } from "expo-blur";
import Songs from "../Components/Songs";
import { Usedata } from "../Providers";

const LikedSongs = () => {
  const { setLikedSongs, likedSongs } = Usedata();
  // search text using filter
  const [searchtext, setSearchText] = useState();
  const [findsong, setFindsong] = useState([]);
  const HadleText = (text) => {
    setSearchText(text);
  };
  useEffect(() => {
    const filtersong = likedSongs.filter((items) => {
      return items.name === searchtext;
    });
    setFindsong(filtersong);
  }, [searchtext]);
  useEffect(() => {
    likedSongs.push(findsong);
  }, [findsong]);
  return (
    <LinearGradient colors={["#1e3261", "black", "black"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* playlist header */}
        <View
          style={{
            height: "10%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Image
              source={{ uri: Icons.arrow }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: Colors.white,
              fontSize: 24,
              textAlign: "center",
              fontWeight: Fonts.weight,
              flex: 2,
            }}
          >
            PlayList Tracks
          </Text>
        </View>
        {/* search wrapper */}
        <View
          style={{
            borderRadius: 15,
            overflow: "hidden",
          }}
        >
          <BlurView
            intensity={25}
            style={{
              borderRadius: 15,
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 25,
              paddingHorizontal: 20,
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              size={20}
              color={Colors.primary}
              style={{ marginRight: 10 }}
            />
            <TextInput
              placeholder="Search"
              style={{
                color: "rgb(114,122,133)",
                fontSize: 19,
                borderWidth: 0,
                flex: 1,
                height: 50,
              }}
              onChangeText={HadleText}
              placeholderTextColor={Colors.grey}
            />
          </BlurView>
        </View>
        {/* button wrapper */}
        <View
          style={{
            // borderWidth: 1,
            borderColor: "red",
            height: "6%",
            flexDirection: "row",
            columnGap: 20,
            marginTop: 25,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "#f2f2f2",
            }}
          >
            <Image
              source={{ uri: Icons.suffle }}
              style={{ width: 25, height: 25 }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "hsl(0, 0%, 60%)",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Image
              source={{ uri: Icons.play }}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>
        {/* playlist song wrapper */}
        <ScrollView>
          {likedSongs.map((items, index) => (
            <Songs items={items} index={index} />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default LikedSongs;
