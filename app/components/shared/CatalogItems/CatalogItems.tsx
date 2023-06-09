import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import { ICategoryData } from "../../../types/data/categoies";
import { getAllCategories } from "../../../services/categories/categories";
import Error from "../../ui/Error/Error";

const CatalogItems = ({ navigation }: any) => {
  const { data, isLoading, isError } = useQuery<ICategoryData>(
    "catalog",
    getAllCategories
  );

  console.log(data);

  if (isLoading) {
    return (
      <ActivityIndicator
        color="#F7553D"
        size="small"
        style={{ marginVertical: 20 }}
      />
    );
  }

  if (isError) {
    console.log(isError);
    return <Error />;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 20,
        marginVertical: 15,
        rowGap: 30,
        columnGap: 10,
        justifyContent: "center",
      }}
    >
      {data?.categories.map((item) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push("CatalogProducts", {
              collection_id: item.id,
            })
          }
          key={item.id}
          style={{ flex: 1, minWidth: "40%" }}
        >
          <Text style={{ textTransform: "uppercase" }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CatalogItems;
