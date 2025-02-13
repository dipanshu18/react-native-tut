import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Account() {
  return (
    <View>
      <Text>Account</Text>

      <Link href={"/account-info"}>
        <Text>More account info</Text>
      </Link>
    </View>
  );
}
