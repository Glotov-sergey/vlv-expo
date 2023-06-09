import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/components/screens/home/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "./app/icons/HomeIcon";
import CatalogIcon from "./app/icons/CatalogIcon";
import Cart from "./app/components/screens/cart/Cart";
import CartIcon from "./app/icons/CartIcon";
import Favourite from "./app/components/screens/favourite/Favourite";
import FavouriteIcon from "./app/icons/FavoriteIcon";
import ProfileIcon from "./app/icons/ProfileIcon";
import { RootStackParams } from "./app/navigation/navigation.interface";
import CatalogScreenStack from "./app/navigation/CatalogStack";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import ProfileScreenStack from "./app/navigation/ProfileStack";

const RootStack = createBottomTabNavigator<RootStackParams>();

const queryClinent = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Optima: require("./app/fonts/Optima.ttf"),
    "Circle-extrabold": require("./app/fonts/circe-extrabold.ttf"),
    "Optima-medium": require("./app/fonts/Optima_Medium.ttf"),
    "Optima-cyr": require("./app/fonts/OptimaCyr.ttf"),
    "Circle-regular": require("./app/fonts/Circe-Regular.ttf"),
    "Circle-bold": require("./app/fonts/Circe-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClinent}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#F7553D",
              tabBarInactiveTintColor: "#7D7473",
            }}
            initialRouteName="Home"
          >
            <RootStack.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <HomeIcon color={color} size={size} />
                ),
                tabBarLabel: "Главная",
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Catalog"
              component={CatalogScreenStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <CatalogIcon size={size} color={color} />
                ),
                tabBarLabel: "Каталог",
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Cart"
              component={Cart}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <CartIcon size={size} color={color} />
                ),
                tabBarLabel: "Корзина",
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Favourite"
              component={Favourite}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FavouriteIcon color={color} size={size} />
                ),
                tabBarLabel: "Вишлист",
                headerShown: false,
              }}
            />
            <RootStack.Screen
              name="Profile"
              component={ProfileScreenStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <ProfileIcon color={color} size={size} />
                ),
                tabBarLabel: "Профиль",
                headerShown: false,
              }}
            />
          </RootStack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
