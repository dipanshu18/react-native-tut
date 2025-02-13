import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
          headerShown: false,
          tabBarStyle: {
            elevation: 0,
            paddingHorizontal: 50,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "For you",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="book" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user-circle" color={color} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
