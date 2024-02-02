/** @format */

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Footer from "./Components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Player from "./Screens/Player";
import Search from "./Screens/Search";
import { Provider_Context } from "./Providers";
import LikedSongs from "./Screens/LikedSongs";
import Playlist from "./Screens/Playlist";
import MiniPlayer from "./Components/MiniPlayer";
import Settings from "./Screens/Settings";


//
export default function App() {
  
  const stack = createNativeStackNavigator();
  return (
    <Provider_Context>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          {/* app navigation view */}
          <View style={{ borderWidth: 0, width: "100%", height: "90%" }}>
            <stack.Navigator initialRouteName="home">
              <stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
              />
              <stack.Screen
                name="player"
                component={Player}
                options={{ headerShown: false }}
              />
              <stack.Screen
                name="settings"
                component={LikedSongs}
                options={{ headerShown: false }}
              />
              <stack.Screen
                name="search"
                component={Search}
                options={{ headerShown: false }}
              />
              <stack.Screen
                name="playlist"
                component={Playlist}
                options={{ headerShown: false }}
              />
              <stack.Screen
                name="like"
                options={{ headerShown: false }}
                component={LikedSongs}
              />
            </stack.Navigator>
            <MiniPlayer />
          </View>
          {/* app footer */}
          <View style={{ borderWidth: 0, width: "100%", height: "10%" }}>
            <Footer />
          </View>
        </SafeAreaView>
        <StatusBar style="dark" />
      </NavigationContainer>
    </Provider_Context>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    // borderColor: "red",
    // borderWidth: 1
  },
});
