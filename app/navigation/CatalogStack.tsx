import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CatalogProduct from "../components/screens/catalogProduct/CatalogProduct";
import CatalogProducts from "../components/screens/catalogProducts/CatalogProducts";
import CatalogSearchScreen from "../components/screens/catalogSearchScreen/CatalogSearchScreen";
import SearchIcon from "../icons/SearchIcon";
import { CatalogStackParams } from "./navigation.interface";

const CatalogStack = createNativeStackNavigator<CatalogStackParams>();

const CatalogScreenStack = () => {
  return (
    <CatalogStack.Navigator initialRouteName="CatalogSearch">
      <CatalogStack.Screen
        name="CatalogSearch"
        component={CatalogSearchScreen}
        options={{ headerShown: false }}
      />
      <CatalogStack.Screen
        name="CatalogProducts"
        component={CatalogProducts}
        options={{
          headerRight: () => <SearchIcon color="#F7553D" />,
          title: "",
          headerTintColor: "#F7553D",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
        }}
      />
      <CatalogStack.Screen
        name="CatalogProduct"
        component={CatalogProduct}
        options={{
          headerTintColor: "#F7553D",
          title: "",
          headerStyle: {
            backgroundColor: "#F0EBE7",
          },
          autoHideHomeIndicator: true,
        }}
      />
    </CatalogStack.Navigator>
  );
};

export default CatalogScreenStack;
