import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useColorScheme } from "nativewind";
import { Pressable, Switch, Text, View } from "react-native";

export default function Account() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 dark:bg-black/85" style={{ paddingHorizontal: 20 }}>
      <Text
        className="dark:text-white font-extrabold my-5"
        style={{ fontSize: 30 }}
      >
        Wallpapers
      </Text>

      <View className="mb-5">
        <Pressable className="flex-row rounded-xl justify-center items-center gap-2 bg-black dark:bg-white p-5">
          <FontAwesome
            size={24}
            name="google"
            color={colorScheme === "light" ? "white" : "black"}
          />
          <Text className="text-white dark:text-black font-bold">
            Sign in with Google
          </Text>
        </Pressable>
      </View>

      <View
        style={{ marginVertical: 20 }}
        className="flex-row items-center gap-5"
      >
        <Text className="dark:text-white font-bold" style={{ fontSize: 25 }}>
          Dark mode
        </Text>

        <Switch
          trackColor={{
            false: "gray",
            true: "white",
          }}
          thumbColor={colorScheme === "dark" ? "gray" : "black"}
          style={{}}
          value={colorScheme === "dark"}
          onChange={toggleColorScheme}
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text
          className="dark:text-white font-bold mb-5"
          style={{ fontSize: 25 }}
        >
          Account
        </Text>

        <View className="gap-5">
          <Link href={"/account-info"}>
            <Text
              style={{ fontWeight: "400", fontSize: 20 }}
              className="dark:text-white"
            >
              More Account Info
            </Text>
          </Link>
          <Link href={"/privacy-policy"}>
            <Text
              style={{ fontWeight: "400", fontSize: 20 }}
              className="dark:text-white"
            >
              Privacy Policy
            </Text>
          </Link>
          <Link href={"/license"}>
            <Text
              style={{ fontWeight: "400", fontSize: 20 }}
              className="dark:text-white"
            >
              License
            </Text>
          </Link>
          <Link href={"/contact"}>
            <Text
              style={{ fontWeight: "400", fontSize: 20 }}
              className="dark:text-white"
            >
              Contact
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
