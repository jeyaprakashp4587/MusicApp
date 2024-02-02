/** @format */

import { createContext, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Providers = createContext();
//
export const Provider_Context = ({ children }) => {
  // create values
  const [selectedsong, setSelectedsong] = useState([]);
  const [selectedplaylist, setSelectedplaylist] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [MiniPlayer, setMiniPlayer] = useState();
  const [RecentlyPlayedSongs, setRecentlyPlayed] = useState([]);

  return (
    <Providers.Provider
      value={{
        selectedsong,
        setSelectedsong,
        selectedplaylist,
        setSelectedplaylist,
        likedSongs,
        setLikedSongs,
        MiniPlayer,
        setMiniPlayer,
        RecentlyPlayedSongs,
        setRecentlyPlayed,
      }}
    >
      {children}
    </Providers.Provider>
  );
};
//
export const Usedata = () => {
  return useContext(Providers);
};
