import { View } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikedPage from "../liked";
import SuggestedPage from "../suggested";
import LibraryPage from "../library";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function ForYouPage() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            borderBlockColor: "red",
            borderBottomWidth: 3,
          },
        }}
      >
        <Tab.Screen
          name="suggested"
          options={{ title: "Suggested" }}
          component={SuggestedPage}
        />
        <Tab.Screen
          name="liked"
          options={{ title: "Liked" }}
          component={LikedPage}
        />
        <Tab.Screen
          name="library"
          options={{
            title: "Library",
          }}
          component={LibraryPage}
        />
      </Tab.Navigator>
    </View>
  );
}
