import { ScrollView, Text, View } from "react-native";

export default function Contact() {
  return (
    <View className="flex-1 dark:bg-black/80">
      <ScrollView className="p-5">
        <Text className="text-2xl font-bold dark:text-white my-2">Contact</Text>
        <Text className="text-xl font-normal dark:text-white my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic
          laborum, nemo obcaecati consequatur explicabo ab tempora, saepe
          dolorem iure deserunt officia omnis nisi exercitationem nulla magnam
          ullam labore nihil! Doloribus in at ad provident exercitationem quae
          ratione qui voluptatum necessitatibus.
        </Text>
      </ScrollView>
    </View>
  );
}
