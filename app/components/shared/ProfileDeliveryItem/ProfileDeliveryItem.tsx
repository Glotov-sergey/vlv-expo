import { View, Text } from "react-native";
import React, { FC, useState } from "react";
import ArrowRight from "../../../icons/ArrowRight";
import { TouchableOpacity } from "react-native-gesture-handler";

type ProfileDeliveryItemProps = {
  title: string;
  content: string[];
};

const ProfileDeliveryItem: FC<ProfileDeliveryItemProps> = ({
  title,
  content,
}) => {
  const [isOpenedContent, setIsOpenedContent] = useState<boolean>(false);
  return (
    <TouchableOpacity
      onPress={() => setIsOpenedContent(!isOpenedContent)}
      style={{ borderTopWidth: 1, borderColor: "#F7553D", paddingVertical: 13 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Optima-cyr",
            fontSize: 16,
            textTransform: "uppercase",
            color: "#F7553D",
            lineHeight: 24,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            transform: [{ rotate: isOpenedContent ? "270deg" : "90deg" }],
          }}
        >
          <ArrowRight />
        </View>
      </View>
      {isOpenedContent ? (
        <View style={{ marginTop: 8, marginBottom: 16, gap: 10 }}>
          {content.map((item) => (
            <Text
              style={{ fontSize: 15, fontFamily: "Circle-regular" }}
              key={item}
            >
              - {item}
            </Text>
          ))}
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default ProfileDeliveryItem;
