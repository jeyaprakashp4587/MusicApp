/** @format */

import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Fonts, Icons, PlaylistsRouter } from "../Constants/Const";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import TopPlaylistjson from "../JSON/Playlist.json";
import Ripple from "react-native-material-ripple";
import { Usedata } from "../Providers";
import { LinearGradient } from "expo-linear-gradient";
import RecentlyPlayed from "../Components/RecentlyPlayed";

const Home = ({ navigation }) => {
  // font

  // fetch playlist json data
  const [TopPlaylist, setTopPlaylist] = useState([]);
  const [modeList, setModeList] = useState([]);
  // const [recentPlayList, setRecentplaylist] = useState([]);
  useEffect(() => {
    setTopPlaylist(TopPlaylistjson.Foryou);
    setModeList(TopPlaylistjson.modeplaylist);
    // setRecentplaylist(TopPlaylistjson.recentplaylist);
    // console.log(TopPlaylist);
  }, [TopPlaylist, modeList]);

  //
  // set context values
  const { RecentlyPlayedSongs } = Usedata();
  const { PlaylistsRouterfunction } = PlaylistsRouter();
  //
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.bgcolor,
        paddingHorizontal: 10,
      }}
    >
      {/* home header */}
      <View
        style={{
          // borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "10%",
        }}
      >
        <FontAwesomeIcon icon={faBars} color="white" size={20} />
        <Text
          style={{
            color: Colors.white,
            fontWeight: "600",
            fontSize: 18,
            textAlign: "center",
          }}
        >
          MUSIC
        </Text>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://i.ibb.co/C8HSZCZ/man.png" }}
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
      {/* search view */}
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "rgba(23,23,23,255)",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 15,
        }}
      >
        <FontAwesomeIcon
          icon={faSearch}
          size={20}
          color={Colors.grey}
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="Search"
          style={{
            color: "rgb(114,122,133)",
            fontSize: 19,
            borderWidth: 0,
            width: "90%",
            height: "100%",
          }}
          placeholderTextColor="gray"
          onPressIn={() => navigation.navigate("search")}
        />
      </View>
      <ScrollView style={{ flex: 1, marginTop: 10, paddingBottom: 20 }}>
        {/* perfect for you wrapper */}
        <View
          style={{
            // borderColor: "red",
            // borderWidth: 1,
            height: 250,
            marginTop: 20,
            flexDirection: "column",
            rowGap: 10,
          }}
        >
          <Text
            style={{ fontWeight: "600", color: Colors.white, fontSize: 25 }}
          >
            Perfect for you
          </Text>
          {/* perfect for you boxes */}
          <ScrollView
            horizontal
            style={{ borderColor: "black", borderWidth: 0 }}
          >
            {TopPlaylist.map((items, index) => (
              <Ripple
                key={index}
                onPress={() => {
                  PlaylistsRouterfunction(items);
                }}
              >
                {/* <Text style={{ color: 'white' }}>{songname}</Text> */}
                <View
                  style={{
                    borderColor: "red",
                    // borderWidth: 1,
                    flex: 1,
                    width: 150,
                    padding: 0,
                    marginRight: 15,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      // borderWidth: 2,
                      borderColor: "red",
                      height: "85%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: items.img }}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 10,
                      }}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={{ height: "10%" }}>
                    <Text
                      style={{
                        fontWeight: "600",
                        color: Colors.primary,
                        fontSize: 17,
                      }}
                    >
                      {items.name}
                    </Text>
                  </View>
                </View>
              </Ripple>
            ))}
          </ScrollView>
        </View>
        {/* Mode Playlist wrapper */}
        <Text
          style={{
            fontWeight: "600",
            color: Colors.white,
            fontSize: 25,
            marginTop: 25,
          }}
        >
          Non stop Listening
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {modeList.map((items, index) => (
            <Ripple onPress={() => PlaylistsRouterfunction(items)}>
              <View
                key={index}
                style={{
                  borderColor: "red",
                  // borderWidth: 1,
                  height: 130,
                  marginTop: 20,
                  borderRadius: 20,
                  flexDirection: "row",
                  // overflow: "hidden",''
                  width: 300,
                  marginRight: 20,
                  backgroundColor:
                    index === 0 ? "white" : index === 1 ? "#3385ff" : "#e38a76",
                }}
              >
                <View
                  style={{
                    borderColor: "yellow",
                    borderWidth: 0,
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 10,
                  }}
                >
                  <Image
                    source={{ uri: items.img }}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "cover",
                      marginTop: 0,
                    }}
                  />
                </View>
                <View
                  style={{
                    borderColor: "blue",
                    borderWidth: 0,
                    flex: 1.4,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 15,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 17,
                      textAlign: "left",
                      color: index === 0 ? Colors.black : "white",
                    }}
                  >
                    {items.name}
                  </Text>
                  <Text style={{ color: index === 0 ? Colors.black : "white" }}>
                    Discover 10 Songs
                  </Text>
                </View>
              </View>
            </Ripple>
          ))}
        </ScrollView>
        {/* recently played */}
        {RecentlyPlayedSongs.length > 0 ? <RecentlyPlayed /> : null}
        {/* liked songs & Broadcosts wrapper */}
        <View style={{ flexDirection: "row", columnGap: 10 }}>
          <LinearGradient
            style={{
              height: 150,
              width: "40%",
              marginTop: 25,
              borderRadius: 5,
            }}
            colors={["#3366cc", "#5c85d6", "#adc2eb"]}
          >
            <Ripple
              style={{
                // borderWidth: 1,
                borderColor: "red",
                flex: 1,
                height: "80%",
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("like")}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Image
                  source={{ uri: Icons.dots }}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  Liked Songs
                </Text>
              </View>
            </Ripple>
          </LinearGradient>
          {/* broadcost */}
          <LinearGradient
            style={{
              height: 150,
              width: "40%",
              marginTop: 25,
              // borderRadius: 5,
              flex: 2,
            }}
            colors={["#1a1a1a", "#666666", "#bfbfbf"]}
          >
            <Ripple
              style={{
                // borderWidth: 1,
                borderColor: "red",
                flex: 1,
                height: "80%",
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("like")}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Image
                  source={{ uri: Icons.broadcast }}
                  style={{ width: 55, height: 55 }}
                />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{
                    color: Colors.primary,
                    fontWeight: "600",
                    fontSize: 18,
                  }}
                >
                  Broadcasts
                </Text>
              </View>
            </Ripple>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  style: {
    borderBlockColor: "red",
  },
});
