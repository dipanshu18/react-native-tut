import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LikedPage from "../liked";
import SuggestedPage from "../suggested";
import LibraryPage from "../library";
import { useColorScheme } from "nativewind";

const Tab = createMaterialTopTabNavigator();

export default function ForYouPage() {
  const { colorScheme } = useColorScheme();
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colorScheme === "dark" ? "black" : "white",
          },
          tabBarIndicatorStyle: {
            borderBlockColor: "#ffb703",
            borderBottomWidth: 3,
          },
          tabBarLabelStyle: {
            color: colorScheme === "dark" ? "white" : "black",
            fontSize: 15,
            fontWeight: "900",
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
