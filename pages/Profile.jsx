import React from "react";
import { View, Text , StatusBar , Image , StyleSheet , Dimensions} from "react-native";


export default function Home() {
  console.log("Profile screen loaded...");
  return(
    <View className="flex-1 items-center">
      <StatusBar style="auto" />
      <View className="bg-blue-400 rounded-xl w-11/12 h-1/6 mt-5 pt-6 mx-15 p-4 ">
        <Text className="text-left text-3xl">Welcome</Text>
      </View>
    </View>
  );
}