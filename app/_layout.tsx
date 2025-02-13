import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Slot } from "expo-router";
import { View, Text } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={{ height: "90%" }}>
        <Slot />
      </View>

      <View style={{ backgroundColor: "pink" }}>
        <Link href={"/account"}>
          <Text>Take me to accounts page</Text>
        </Link>

        <Link href={"/"}>
          <Text>Take me to for you page</Text>
        </Link>

        <Link href={"/explore"}>
          <Text>Take me to explore page</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
