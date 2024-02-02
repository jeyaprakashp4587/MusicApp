/** @format */

import { View, Text, Image } from "react-native";
import React from "react";
import Ripple from "react-native-material-ripple";
import { Colors, Icons } from "../Constants/Const";
import { useSongRouter } from "../Constants/Const";

const Songs = (props) => {
  const { songRouterFunction } = useSongRouter();
  return (
    <Ripple onPress={() => songRouterFunction(props.items)} key={props.index}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          height: 80,
          //   borderWidth: 1,
          borderColor: "red",
          alignItems: "center",
          marginTop: 20,
          columnGap: 10,
          backgroundColor: "rgba(0,0,0,.3)",
          padding: 10,
          borderRadius: 10
        }}
      >
        <View
          style={{
            flex: 1.4,
            borderColor: "red",
            borderWidth: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: props.items.img,
            }}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 5, paddingLeft: 10 }}>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.white,
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            {props.items.name}
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontWeight: "400",
              fontSize: 17,
              marginTop: -5,
            }}
          >
            {props.items.from}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={{ uri: Icons.play }}
            style={{ width: 30, height: 30 }}
          />
        </View>
      </View>
    </Ripple>
  );
};

export default Songs;
