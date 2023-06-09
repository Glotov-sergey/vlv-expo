import { View, Text, Image } from "react-native";
import React from "react";
import CatalogLabel from "../../../icons/CatalogLabel";
import { PurpleLabel, RedButtonLabel } from "./CatalogLabelsStyled";

const CatalogLabels = () => {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          width: 167,
          height: 167,
        }}
      >
        <View style={{ position: "absolute" }}>
          <CatalogLabel />
        </View>
        <Text
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Новинки
        </Text>
      </View>
      <View style={{ gap: 10 }}>
        <PurpleLabel>
          <Text
            style={{
              textTransform: "uppercase",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Последний шанс
          </Text>
        </PurpleLabel>
        <RedButtonLabel>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            SALE
          </Text>
        </RedButtonLabel>
      </View>
    </View>
  );
};

export default CatalogLabels;
