import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="account-info"
          options={{
            title: "Account",
            headerShown: true,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
