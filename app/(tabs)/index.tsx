import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ForYouPage() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "space-evenly",
          marginVertical: 10,
          padding: 10,
        }}
      >
        <Link href={"/suggested"}>
          <Text>Suggested</Text>
        </Link>
        <Link href={"/purchased"}>
          <Text>Purchased</Text>
        </Link>
        <Link href={"/liked"}>
          <Text>Liked</Text>
        </Link>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>For you page</Text>
      </View>
    </View>
  );
}
