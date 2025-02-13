import { Link } from "expo-router";
import { Text, View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikedPage from "../liked";
import SuggestedPage from "../suggested";
import PurchasedPage from "../purchased";

const Tab = createMaterialTopTabNavigator();

export default function ForYouPage() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="liked" component={LikedPage} />
        <Tab.Screen name="suggested" component={SuggestedPage} />
        <Tab.Screen name="purchased" component={PurchasedPage} />
      </Tab.Navigator>
    </View>
  );
}
