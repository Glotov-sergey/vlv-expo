import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../components/screens/profile/Profile";
import ProfileLogin from "../components/screens/profile/ProfileLogin";
import ProfileRegister from "../components/screens/profile/ProfileRegister";
import { ProfileStackParams } from "./navigation.interface";
import ProfileShops from "../components/screens/profile/ProfileShops";
import ProfileAbout from "../components/screens/profile/ProfileAbout";
import ProfileRecomendations from "../components/screens/profile/ProfileRecomendations";
import ProfileDelivery from "../components/screens/profile/ProfileDelivery";
import ProfileReturn from "../components/screens/profile/ProfileReturn";

const ProfileStack = createNativeStackNavigator<ProfileStackParams>();

const ProfileScreenStack = () => {
  return (
    <ProfileStack.Navigator initialRouteName="profileMain">
      <ProfileStack.Screen
        name="profileMain"
        component={Profile}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="profileLogin"
        component={ProfileLogin}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="profileRegister"
        component={ProfileRegister}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="profileShops"
        component={ProfileShops}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="profileAbout"
        component={ProfileAbout}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="profileRecomendations"
        component={ProfileRecomendations}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="profileDelivery"
        component={ProfileDelivery}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
      <ProfileStack.Screen
        name="profileReturn"
        component={ProfileReturn}
        options={{
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          headerShadowVisible: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileScreenStack;
