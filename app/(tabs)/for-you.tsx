import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikedPage from "../liked";
import SuggestedPage from "../suggested";
import LibraryPage from "../library";

const Tab = createMaterialTopTabNavigator();

export default function ForYouPage() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="library" component={LibraryPage} />
        <Tab.Screen name="suggested" component={SuggestedPage} />
        <Tab.Screen name="liked" component={LikedPage} />
      </Tab.Navigator>
    </View>
  );
}
