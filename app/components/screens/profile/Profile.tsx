import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppSelector } from "../../../hooks/redux";
import ProfileFirstElipse from "../../../icons/ProfileFirstElipse";
import ProfileLines from "../../../icons/ProfileLines";
import { ProfileStackParams } from "../../../navigation/navigation.interface";
import {
  StyledHomeCategoryBlock,
  StyledHomeCategoryImage,
  StyledHomeCategoryText,
} from "../../shared/HomeCategories/HomeCategoriesStyled";
import { BlackTitle } from "../../styled/global";
import { profileData } from "./profile.data";

type ProfileScreenProps = NativeStackScreenProps<ProfileStackParams>;

const Profile = ({ navigation }: ProfileScreenProps) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <ScrollView
      style={{ backgroundColor: "#F0EBE7", flex: 1, paddingVertical: 60 }}
    >
      <SafeAreaView>
        {user ? (
          <>
            <View>
              <BlackTitle style={{ marginBottom: 0 }}>Привет</BlackTitle>
              <BlackTitle style={{ color: "#F7553D" }}>{user.name}!</BlackTitle>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <View>
                <StyledHomeCategoryBlock>
                  <StyledHomeCategoryImage
                    source={require("../../../static/profile-menu-1.png")}
                  />
                  <StyledHomeCategoryText
                    style={{ maxWidth: 132, textAlign: "center" }}
                  >
                    История заказов
                  </StyledHomeCategoryText>
                </StyledHomeCategoryBlock>
              </View>
              <View>
                <StyledHomeCategoryBlock>
                  <StyledHomeCategoryImage
                    source={require("../../../static/profile-menu-2.png")}
                  />
                  <StyledHomeCategoryText
                    style={{ maxWidth: 132, textAlign: "center" }}
                  >
                    Скидки И Бонусы
                  </StyledHomeCategoryText>
                </StyledHomeCategoryBlock>
              </View>
              <View>
                <StyledHomeCategoryBlock>
                  <StyledHomeCategoryImage
                    source={require("../../../static/profile-menu-3.png")}
                  />
                  <StyledHomeCategoryText
                    style={{ maxWidth: 132, textAlign: "center" }}
                  >
                    Личные данные
                  </StyledHomeCategoryText>
                </StyledHomeCategoryBlock>
              </View>
              <View>
                <StyledHomeCategoryBlock>
                  <StyledHomeCategoryImage
                    source={require("../../../static/profile-menu-4.png")}
                  />
                  <StyledHomeCategoryText
                    style={{ maxWidth: 132, textAlign: "center" }}
                  >
                    Адрес доставки
                  </StyledHomeCategoryText>
                </StyledHomeCategoryBlock>
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              flex: 1,
            }}
          >
            <View style={{ position: "absolute", top: -28, opacity: 0.1 }}>
              <ProfileLines />
            </View>
            <View style={{ maxWidth: 263 }}>
              <BlackTitle>Вход и регистрация</BlackTitle>
              <Text
                style={{
                  fontFamily: "Circle-regular",
                  textAlign: "center",
                  marginBottom: 39,
                }}
              >
                Чтобы делать покупки, отслеживать заказы и пользоваться
                персональными скидками и бонусами
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.push("profileLogin");
                }}
                style={{
                  backgroundColor: "#F7553D",
                  alignSelf: "center",
                  paddingHorizontal: 20,
                  paddingVertical: 13,
                  borderRadius: 16,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Circle-bold",
                    textTransform: "uppercase",
                    color: "white",
                  }}
                >
                  Продолжить
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 10,
            marginTop: 70,
          }}
        >
          {profileData.map((item) => (
            <TouchableOpacity
              style={{
                borderTopWidth: 1,
                borderTopColor: "#F7553D",
                paddingVertical: 20,
              }}
              key={item.href}
              onPress={() => navigation.push(item.href)}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  fontFamily: "Optima-cyr",
                  fontSize: 20,
                  color: "#F7553D",
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;
