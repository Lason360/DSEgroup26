import React from "react";
import { View, Text , StatusBar , Image , StyleSheet , Dimensions} from "react-native";
//rimport { FlatList } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH = SRC_WIDTH*0.8;
const SPACING = SRC_WIDTH*0.02;
const SIDECARD_LENGTH = (SRC_WIDTH*0.18)/2;

// function Item(){
//   return(
//     <View>
//       <Image>
//     </View>
//   )
// }


export default function Home() {
  console.log("Home screen loaded...");

  const Data=[
    {id:"1" , title:"first item" , },
    {id:"2" , title:"Second item" , },
    {id:"3" , title:"Third item" , },
    {id:"4" , title:"Fourth item" , },
  ]

  return(
    <View className="flex-1 items-center">
      <StatusBar style="auto" />
      <View className=" bg-black rounded-b-3xl w-screen">
        <Image
          source={require("../assets/icon-white.png")}
          className="h-24 w-52 ml-8"
        />
        <View className="flex-row">
          <Image source={require("../assets/person.jpg")} className="h-28 w-28 rounded-xl m-7"/>
          <View className="flex-col my-7">
            <Text className="text-3xl text-white font-bold font">Hey Chirantha</Text>
            <View className="flex-row items-center">
              <MaterialIcons name="star" color={'gold'} size={15}/>
              <Text className="text-white text-lg font-semibold mx-2">88% Healthy</Text>
            </View>
            <View className="flex-row items-center">
              <MaterialIcons name="sync" color={'green'} size={20} />
              <Text className="text-white text-lg font-semibold mx-2">Last Workout: 2 Days ago</Text>
            </View>
          </View>
        </View>
      </View>
      {/* <View>
        <FlatList
          data = {Data}
          renderItem={() =>{

          }}
          keyExtractor={(item) => item.id}
        />
      </View> */}
    </View>
  );
}