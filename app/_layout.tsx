import { Stack } from "expo-router";
import "@/app/globals.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./globals.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <GluestackUIProvider mode="light">
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="account-info"
            options={{
              title: "Account",
              headerShown: true,
            }}
          />
        </Stack>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
