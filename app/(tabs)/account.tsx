import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Account() {
  return (
    <View className="flex-1" style={{ paddingHorizontal: 20 }}>
      <Text className="font-extrabold mb-5" style={{ fontSize: 30 }}>
        Wallpapers
      </Text>

      <View className="mb-5">
        <Pressable className="flex-row rounded-xl justify-center items-center gap-2 bg-black p-5">
          <FontAwesome size={24} name="google" color={"white"} />
          <Text className="text-white font-bold">Sign in with Google</Text>
        </Pressable>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text className="font-bold mb-5" style={{ fontSize: 25 }}>
          Theme
        </Text>

        <View className="flex-row w-full gap-5">
          <Pressable className="flex-row items-center justify-center p-5  rounded-xl px-10 gap-2  bg-black dark:bg-white">
            <FontAwesome size={24} name="moon-o" color={"white"} />
            <Text className="text-white dark:text-black font-bold text-xl">
              Dark
            </Text>
          </Pressable>
          <Pressable className="flex-row items-center justify-center px-10 gap-2 p-5 bg-white dark:bg-black rounded-xl">
            <FontAwesome size={24} name="sun-o" color={"black"} />

            <Text className="text-black dark:text-white font-bold text-xl">
              Light
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text className="font-bold mb-5" style={{ fontSize: 25 }}>
          Account
        </Text>

        <View className="gap-5">
          <Link href={"/account-info"}>
            <Text style={{ fontWeight: "400", fontSize: 20 }}>
              More Account Info
            </Text>
          </Link>
          <Link href={"/privacy-policy"}>
            <Text style={{ fontWeight: "400", fontSize: 20 }}>
              Privacy Policy
            </Text>
          </Link>
          <Link href={"/license"}>
            <Text style={{ fontWeight: "400", fontSize: 20 }}>License</Text>
          </Link>
          <Link href={"/contact"}>
            <Text style={{ fontWeight: "400", fontSize: 20 }}>Contact</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
