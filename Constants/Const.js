/** @format */

export const Colors = {
  primary: "#dedede",
  grey: "#969493",
  white: "#ffff",
  black: "#171716",
  thirs: "#333333",
  bgcolor: "black",
};

export const Fonts = {
  head_size: 25,
  small_size: 17,
  weight: "600",
};

export const Icons = {
  arrow: "https://i.ibb.co/QdsrjNT/left-chevron.png",
  setting: "https://i.ibb.co/qgFJvCN/settings.png",
  dots: "https://i.ibb.co/Htv5Xwf/heart.png",
  home: "https://i.ibb.co/f8ZYFs6/home.png",
  playlist: "https://i.ibb.co/N1DYqWx/playlist.png",
  three_dots: "https://i.ibb.co/nn25gZN/menu.png",
  play: "https://i.ibb.co/rsMW8Y8/play-button.png",
  pause: "https://i.ibb.co/F4jY3gx/pause.png",
  next_song: "https://i.ibb.co/94YTWbH/next.png",
  previous_song: "https://i.ibb.co/DM9f0pX/previous-track.png",
  suffle: "https://i.ibb.co/Y3sr7dN/suffle.png",
  repeat: "https://i.ibb.co/DDRRKpY/repeat.png",
  more: "https://i.ibb.co/DV77BF2/more.png",
  expand: "https://i.ibb.co/cDbtC28/expand-arrows.png",
  heartsong: "https://i.ibb.co/pzcCQQk/heart-song.png",
  broadcast: "https://i.ibb.co/tz3wFMw/broadcast.png",
};

// export song router
import { useNavigation } from "@react-navigation/native";
import { Usedata } from "../Providers";

// ----------  custom hook funcrion for song --------------

export const useSongRouter = () => {
  const router = useNavigation();
  const { setSelectedsong, RecentlyPlayedSongs, setRecentlyPlayed } = Usedata();
  const songRouterFunction = (item) => {
    router.navigate("player");
    setSelectedsong(item);
    const alreadyPlayed = RecentlyPlayedSongs.some(
      (playedItem) => playedItem.name === item.name
    );
    if (!alreadyPlayed) {
      setRecentlyPlayed([...RecentlyPlayedSongs, item]);
    }
  };

  return {
    songRouterFunction,
  };
};

// ------------------- custom hook for playlist -------------

export const PlaylistsRouter = () => {
  const router = useNavigation();
  const { setSelectedplaylist } = Usedata();
  const PlaylistsRouterfunction = (item) => {
    router.navigate("playlist");
    setSelectedplaylist(item);
  };
  return {
    PlaylistsRouterfunction,
  };
};

// ---------- custom hook for likedd songs

export const likedSongsfun = () => {
  const { setLikedSongs, likedSongs } = Usedata();
  const handleLike = (songs) => {
    setLikedSongs([...likedSongs, songs]);
  };
  return {
    handleLike,
  };
};
