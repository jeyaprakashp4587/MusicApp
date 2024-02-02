/** @format */

import { View, Text, ImageBackground, ScrollView } from "react-native";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Icons } from "../Constants/Const";
import { Image } from "react-native";
import Ripple from "react-native-material-ripple";
import { Usedata } from "../Providers";
import Songsjson from "../JSON/Songs.json";
import Songs from "../Components/Songs";
import { FlatList } from "react-native";

const Playlist = () => {
  // fetch api
  const [Api, setApi] = useState([]);
  // const fetchApi = async () => {
  //   const url =
  //     "https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "cb3ff0abfbmsh7b8073caf100c66p1baf3cjsnd31a49048a37",
  //       "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  //     },
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //      setApi(result.data);
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchApi();
  // }, []);
  // context
  const { selectedplaylist } = Usedata();
  // filter songs from same artist name
  const [filtersongs, setFiltersongs] = useState([]);
  // fetch data from json
  const [Song, setSongs] = useState([]);
  useEffect(() => {
    setSongs(Songsjson.songs);
  }, [Song]);
  // find filter songs
  useEffect(() => {
    const filtersong = Song.filter((song) => {
      return selectedplaylist.artist
        ? selectedplaylist.artist === song.artist
        : selectedplaylist.latest
        ? selectedplaylist.latest === song.latest
        : Song;
    });
    setFiltersongs(filtersong);
  }, [Song]);

  // scroll event
  const content = useRef(null);
  const HandleScroll = () => {
    if (content.current) {
      content.current.setNativeProps({
        style: {
          marginTop: "0%",
          justifyContent: "center",
        },
      });
    }
  };
  return (
    <ImageBackground
      source={{ uri: selectedplaylist.img }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <LinearGradient
        style={{ flex: 1, paddingHorizontal: 20 }}
        colors={["rgba(0,0,0,.5)", "rgba(0,0,0,70)"]}
      >
        {/* playlist header */}
        <View
          style={{
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 0,
          }}
        >
          <Image
            source={{ uri: Icons.arrow }}
            style={{ width: 30, height: 20 }}
          />
          <Text
            style={{ color: Colors.primary, fontWeight: "600", fontSize: 20 }}
          >
            Playlist
          </Text>
          <Image
            source={{ uri: Icons.dots }}
            style={{ width: 25, height: 25 }}
          />
        </View>
        {/* playlist content */}

        <View style={{ flex: 1 }}>
          <View
            ref={content}
            style={{
              marginTop: "45%",
              // borderWidth: 5,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              height: 300,
              rowGap: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                fontSize: 35,
                color: Colors.white,
                textAlign: "center",
              }}
            >
              {selectedplaylist.name}
            </Text>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: Colors.primary,
              }}
            >
              {selectedplaylist.role}
            </Text>
            <Ripple
              style={{
                //   backgroundColor: "#4da6ff",
                backgroundColor: "#00b300",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 13 }}>
                Play Randomly
              </Text>
            </Ripple>
          </View>
          {/* songs */}
          <ScrollView
            style={{ marginTop: 20 }}
            scrollEventThrottle={80}
            onScroll={HandleScroll}
            showsVerticalScrollIndicator={false}
          >
            {filtersongs.map((items, index) => (
              <Songs items={items} index={index} />
            ))}
          </ScrollView>
        </View>
        {/* api testing */}
        {/* <FlatList
          data={Api}
          renderItem={({ items }) => (
            <View
              style={{
                width: 200,
                height: 200,
                borderWidth: 4,
                borderColor: "red",
              }}
            >
              <Text>{ items.id}</Text>
            </View>
          )}
          style={{ flex: 1, height: 300 }}
        /> */}
      </LinearGradient>
    </ImageBackground>
  );
};

export default Playlist;
