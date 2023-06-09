import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewComponent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import FavouriteIcon from "../../../icons/FavoriteIcon";
import { RootStackParams } from "../../../navigation/navigation.interface";
import {
  BlackTitle,
  StyledProductBrand,
  StyledProductContainer,
  StyledProductImage,
  StyledProductPrice,
  StyledProductTitle,
} from "../../styled/global";
import { removeFromWishlist } from "../../../store/slices/wishlistSlice";

type FavouriteStackNativeProps = NativeStackScreenProps<
  RootStackParams,
  "Favourite"
>;

const Favourite = ({ navigation }: FavouriteStackNativeProps) => {
  const { wishlistItems } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView
      style={{ backgroundColor: "#F0EBE7", paddingTop: 60, height: "100%" }}
    >
      {wishlistItems.length === 0 ? (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <FavouriteIcon size={54} color="#F7553D" />
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginTop: 20,
              fontFamily: "Circle-bold",
            }}
          >
            Список избранного пока пуст
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              marginTop: 20,
              borderColor: "#F7553D",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 8,
              width: "50%",
            }}
            onPress={() => navigation.navigate("Catalog")}
          >
            <Text
              style={{
                fontFamily: "Circle-bold",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#F7553D",
              }}
            >
              Перейти в каталог
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <BlackTitle>Вишлист</BlackTitle>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {wishlistItems.map((item) => (
              <StyledProductContainer key={item.id}>
                <StyledProductImage source={{ uri: item.images[2] }} />
                <StyledProductBrand>{item.brand}</StyledProductBrand>
                <StyledProductTitle>{item.title}</StyledProductTitle>
                <StyledProductPrice>{item.price} ₽</StyledProductPrice>
              </StyledProductContainer>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favourite;
