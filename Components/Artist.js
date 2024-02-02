import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Colors, Icons, PlaylistsRouter } from "../Constants/Const";
import { useSongRouter } from "../Constants/Const";
import Ripple from 'react-native-material-ripple'

const Artist = ({ items, index }) => {
  const { PlaylistsRouterfunction } = PlaylistsRouter();
  return (
      <Ripple onPress={() => PlaylistsRouterfunction(items)}>
            <View
            key={index}
            style={{
              borderWidth: 1,
              borderColor: Colors.grey,
              width: "43%",
              height: 170,
              flexDirection: "column",
              alignItems: "center",
              marginTop: 20,
              // rowGap: 15,
              padding: 12,
              borderRadius: 5,
              // backgroundColor: Colors.grey,
              // justifyContent: 'center'
            }}
          >
            <View
              style={{
                height: "80%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: items.img }}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                height: "20%",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 4,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "600",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {items.name}
              </Text>
            </View>
          </View>
    </Ripple>
  )
}

export default Artist

const styles = StyleSheet.create({})