import "@/app/globals.css";
import { Link, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./globals.css";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <GestureHandlerRootView>
      <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="account-info"
          options={{
            title: "Account",
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "black" : "white",
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "900",
              color: colorScheme === "dark" ? "white" : "black",
            },
            headerLeft: () => (
              <Link href={"/account"}>
                <FontAwesome
                  name="arrow-left"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="privacy-policy"
          options={{
            title: "Wallpapers",
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "black" : "white",
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "900",
              color: colorScheme === "dark" ? "white" : "black",
            },
            headerLeft: () => (
              <Link href={"/account"}>
                <FontAwesome
                  name="arrow-left"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="license"
          options={{
            title: "Wallpapers",
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "black" : "white",
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "900",
              color: colorScheme === "dark" ? "white" : "black",
            },
            headerLeft: () => (
              <Link href={"/account"}>
                <FontAwesome
                  name="arrow-left"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </Link>
            ),
          }}
        />
        <Stack.Screen
          name="contact"
          options={{
            title: "Contact",
            headerShown: true,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: colorScheme === "dark" ? "black" : "white",
            },
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "900",
              color: colorScheme === "dark" ? "white" : "black",
            },
            headerLeft: () => (
              <Link href={"/account"}>
                <FontAwesome
                  name="arrow-left"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              </Link>
            ),
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
