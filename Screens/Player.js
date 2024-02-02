/** @format */

import { Image, Text, TouchableOpacity, View } from "react-native";
import { Colors, Icons, Fonts, likedSongsfun } from "../Constants/Const";
import React, { useEffect, useRef, useState } from "react";
import { Usedata } from "../Providers";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const Player = ({ navigation }) => {
  const { handleLike } = likedSongsfun();
  const { selectedsong, setMiniPlayer } = Usedata();
  const [isplay, setIsplay] = useState(true);
  const [song, setSong] = useState();
  const [error, setError] = useState();

  // full screen player
  useEffect(() => {
    const loadAndPlayAudio = async () => {
      try {
        if (song) {
          await song.unloadAsync(); 
        }
        if (selectedsong) {
          const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: selectedsong.song },
            { shouldPlay: true }
          );
          setSong(newSound);
        }
      } catch (error) {
        console.log("Error loading or playing the audio", error);
      }
    };

    loadAndPlayAudio();
    return () => {
      if (song) {
        song.stopAsync();
        song.unloadAsync();
      }
    };
  }, [selectedsong]);
  const play = () => {
    setIsplay(!isplay);
    if (song) {
      
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.bgcolor,
        paddingHorizontal: 20,
      }}
    >
      {/* player header */}
      <View
        style={{
          borderColor: "red",
          //   borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home"), setMiniPlayer(true);
          }}
        >
          <Image
            source={{ uri: Icons.arrow }}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: Colors.grey,
            fontSize: 24,
            fontWeight: Fonts.weight,
          }}
        >
          {selectedsong.arname}
        </Text>

        <TouchableOpacity onPress={() => handleLike(selectedsong)}>
          <Image
            source={{ uri: Icons.dots }}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
      {/* song details wrapper */}
      <View
        style={{
          borderWidth: 1,
          //   borderColor: "red",
          height: "65%",
          flexDirection: "column",
          rowGap: 15,
          marginTop: 15,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            // borderColor: "red",
            height: "65%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: selectedsong.img }}
            style={{
              width: "80%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 15,
            }}
          />
        </View>
        {/* song details name  */}
        <View
          style={{
            width: "100%",
            // borderWidth: 1,
            borderColor: "red",
          }}
        >
          <Text
            style={{
              color: Colors.white,
              fontSize: 20,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            {selectedsong.name} <Text>({selectedsong.from})</Text>
            {error}
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {selectedsong.arname}
          </Text>
          {/* <View style={{ position: "absolute", right: "10%", top: "10%" }}>
            <Image
              source={{ uri: "https://i.ibb.co/7zJfzVT/sign.png" }}
              style={{ width: 25, height: 25 }}
            />
          </View> */}
        </View>
      </View>
      {/* audio */}

      {/* song controls */}
      <View
        style={{
          borderWidth: 1,
          // borderColor: "red",
          height: "15%",
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Image
          source={{ uri: Icons.suffle }}
          style={{ width: 30, height: 30 }}
        />
        <Image
          source={{ uri: Icons.previous_song }}
          style={{ width: 35, height: 35 }}
        />
        <TouchableOpacity onPress={play}>
          <Image
            source={{ uri: isplay ? Icons.play : Icons.pause }}
            style={{ width: 55, height: 55 }}
          />
        </TouchableOpacity>
        <Image
          source={{ uri: Icons.next_song }}
          style={{ width: 35, height: 35 }}
        />
        <Image
          source={{ uri: Icons.repeat }}
          style={{ width: 30, height: 30 }}
        />
      </View>
    </View>
  );
};

export default Player;
