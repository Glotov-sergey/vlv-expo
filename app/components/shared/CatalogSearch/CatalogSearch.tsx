import { View, Text } from "react-native";
import React from "react";
import { StyledCatalogInput } from "./CatalogSearchStyled";
import SearchIcon from "../../../icons/SearchIcon";
import { BlackTitle } from "../../styled/global";

const CatalogSearch = () => {
  return (
    <View>
      <BlackTitle>Каталог</BlackTitle>
      <View
        style={{
          position: "relative",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <StyledCatalogInput
          style={{ borderColor: "#F7553D", borderWidth: 1, paddingLeft: 40 }}
          placeholder="Поиск..."
        />
        <View style={{ position: "absolute", left: 30 }}>
          <SearchIcon />
        </View>
      </View>
    </View>
  );
};

export default CatalogSearch;
