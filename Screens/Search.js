/** @format */

import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { faL, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BlurView } from "expo-blur";
import { Colors, Icons } from "../Constants/Const";
import { useNavigation } from "@react-navigation/native";
import Ripple from "react-native-material-ripple";
import { Usedata } from "../Providers";
import songsJson from "../JSON/Songs.json";
import { useSongRouter } from "../Constants/Const";
import Songs from "../Components/Songs";
import Artist from "../Components/Artist";

const Search = () => {
  const navigation = useNavigation();

  // import data from context

  // fetch data from json
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    setSongs(songsJson.songs);
  }, []);
  // filtering songs from search
  const [searchsong, setSearchsong] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  useEffect(() => {
    const filtersong = songs.filter((song) => {
      return (
        song.artist.trim().toLowerCase() === searchtext.toLowerCase().trim()
      );
    });
    setSearchsong(filtersong);
  }, [searchtext]);
  // set input text
  const Inputchange = (text) => {
    setSearchtext(text);
    setSearchsong(false);
    setOptions("All");
  };
  // filter song components
  const Mainstatic = () => {
    if (searchsong.length > 0) {
      return <Filtersongs />;
    }
    if (!searchsong) {
      return <SearchingText />;
    } else {
      return <StaticFilter />;
    }
  };
  // searching component
  const SearchingText = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="#ffff" />
      </View>
    );
  };
  // after find songs
  const Filtersongs = () => {
    return (
      <ScrollView style={{ flex: 1 }}>
        {/* song filter  search song wrapper */}
        {/* control songs playlist options */}
        {options === "songs" ? (
          <View>
            <Text
              style={{
                color: Colors.white,
                fontWeight: "600",
                fontSize: 24,
                marginTop: 20,
              }}
            >
              Top Result
            </Text>
            {/* Songs */}
            <Text
              style={{
                color: Colors.white,
                fontWeight: "600",
                fontSize: 18,
                marginTop: 20,
              }}
            >
              Songs
            </Text>
            {/* show filter song lists */}
            {searchsong.map((items, index) => (
              <Songs items={items} index={index} />
            ))}
          </View>
        ) : options === "Playlists" ? (
          <View>
            <Text
              style={{
                color: Colors.white,
                fontWeight: "600",
                fontSize: 18,
                marginTop: 20,
              }}
            >
              Playlists
            </Text>
            {searchsong.map((items, index) => (
              <Artist items={items} index={index} />
            ))}
          </View>
        ) : options === "All" ? (
          <View>
            {/* song */}
            <View>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "600",
                  fontSize: 24,
                  marginTop: 20,
                }}
              >
                Top Result
              </Text>
              {/* Songs */}
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "600",
                  fontSize: 18,
                  marginTop: 20,
                }}
              >
                Songs
              </Text>
              {/* show filter song lists */}
              {searchsong.map((items, index) => (
                <Songs items={items} index={index} />
              ))}
            </View>
            {/* playlist */}
            <View>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "600",
                  fontSize: 18,
                  marginTop: 20,
                }}
              >
                Playlists
              </Text>
              {searchsong.map((items, index) => (
                <Artist items={items} index={index} />
              ))}
            </View>
          </View>
        ) : (
          <Text>No More</Text>
        )}
      </ScrollView>
    );
  };
  // before static component
  const StaticFilter = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: Colors.white, fontWeight: "500", fontSize: 25 }}>
          Search something
        </Text>
      </View>
    );
  };
  // songs playlist options
  const [options, setOptions] = useState("All");
  const Showsongs = () => {
    setOptions("songs");
  };
  const Showplaylist = () => {
    setOptions("Playlists");
  };
  // -----------------------------------------------------------
  // ----------------------------------------------------------
  return (
    <LinearGradient colors={["#666666", "black", "black"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* search header */}
        <View
          style={{
            height: "10%",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("home")}>
            <Image
              source={{ uri: Icons.arrow }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
          <Ripple>
            <Text
              style={{
                fontSize: 17,
                color: Colors.white,
                textDecorationLine: "underline",
              }}
            >
              Recent Search
            </Text>
          </Ripple>
        </View>
        {/* serach wrapper */}
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
              placeholderTextColor={Colors.grey}
              value={searchtext}
              onChangeText={Inputchange}
            />
          </BlurView>
        </View>

        {/* songs options filter */}
        <View
          style={{
            // borderWidth: 1,
            height: 40,
            flexDirection: "row",
            width: "60%",
            marginTop: 20,
            columnGap: 10,
          }}
        >
          <Ripple
            style={{
              borderWidth: 1,
              borderColor: Colors.grey,
              flex: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={Showsongs}
          >
            <Text style={{ color: Colors.white, fontSize: 16 }}>Songs</Text>
          </Ripple>
          <Ripple
            style={{
              flex: 1,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "hsl(0, 0%, 60%)",
            }}
            onPress={Showplaylist}
          >
            <Text
              style={{ fontWeight: "600", color: Colors.white, fontSize: 16 }}
            >
              Artist
            </Text>
          </Ripple>
        </View>
        {/* song lists and playlist wrapper */}
        <Mainstatic />
      </View>
    </LinearGradient>
  );
};

export default Search;
