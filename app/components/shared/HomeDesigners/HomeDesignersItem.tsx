import { View, Text, Image } from "react-native";
import React, { FC } from "react";
import { IDesigner } from "../../../utils/mocks/designers.data";
import { StyledHomeDesignersItemText } from "./HomeDesignersStyled";

interface IHomeDesignersItemProps {
  item: IDesigner;
}

const HomeDesignersItem: FC<IHomeDesignersItemProps> = ({ item }) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Image source={item.imageUrl} />
      <StyledHomeDesignersItemText>{item.title}</StyledHomeDesignersItemText>
    </View>
  );
};

export default HomeDesignersItem;
