import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ffb703",
          headerShown: false,
          tabBarInactiveTintColor: colorScheme === "dark" ? "white" : "gray",
          tabBarStyle: {
            height: 55,
            borderTopWidth: 0,
            marginVertical: "auto",
            elevation: 0,
            paddingHorizontal: 50,
            backgroundColor: colorScheme === "dark" ? "black" : "white",
          },
        }}
      >
        <Tabs.Screen
          name="for-you"
          options={{
            title: "For You",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "900",
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Explore",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "900",
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="feed" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "900",
            },
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user-circle" color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
