import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {Image, Dimensions, FlatList, ScrollView, Text, TouchableOpacity, View, ToastAndroid, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

const images = [
  {uri: 'https://gsbl.in/wp-content/uploads/2022/06/event11.png'},
  {uri: 'https://wealthcreator.co.in/wp-content/uploads/2022/12/Free-Online-Courses-with-Certificates.jpg'},
  {uri: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201811/online-3412473_1920_1.jpeg?size=690:388'},
];

const handleOpenURL = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        // Handle cases where the URL cannot be opened (e.g., display an error message)
      }
    })
    .catch((err) => console.error('An error occurred', err));
};

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const [isReserved, setIsReserved] = useState(false);

  const handleReserve = () => {
    ToastAndroid.show('Reservation successful', ToastAndroid.SHORT);
    setIsReserved(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">

    {/* Header Section */}
      <View className=" fixed px-4 py-2 bottom-0 left-0 right-0 bg-white">
        <View className=" flex flex-row items-center">
          <TouchableOpacity className="flex-1">
           <Icon1 className="mt-1.5" name="left" size={20} color="black" />
          </TouchableOpacity>
          <View className="flex flex-row gap-6 items-center">
            <TouchableOpacity>
              <Icon2 className="mt-1.5" name="share-alternative" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon1 className="mt-1.5" name="hearto" size={20} color="black" />
            </TouchableOpacity>
            <View className="items-center">
              <Text className="text-sm font-extrabold -mb-1">42</Text>
              <Text className="text-xs">credits</Text>
            </View>
          </View>
        </View>
      </View>

    <ScrollView scrollEnabled={true} >

    {/* Horizontall Image scrolling */}
    <View style={{ height: 200, backgroundColor: '#fff' }}>
      <FlatList
        data={images}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.uri }}
            style={{ width: windowWidth, height: 200, resizeMode: 'cover' }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        snapToInterval={300} // adjust this value to match the width of your images
        snapToAlignment={'center'}
      />
    </View>

      {/* Body */}
      <View className="px-4 mt-4">
        <View>
          <Text className=" text-4xl font-extrabold ">
            HIIT Bootcamp Vondelpark
          </Text>
          <View className="flex flex-row gap-1 mt-1">
            <Text className="text-md font-semibold">
              4.9
            </Text>
            <Icon1 className="mt-1.5" name="star" size={14} color="black" />
            <Text className=""> (100+) </Text>
            <Text> Excellent </Text>
          </View>
          <Text className=" font-light">
            Strength Training, Outdoor
          </Text>
          <Text className="mt-3">
            Sun, May 19.  9:00 AM - 9:45 AM
          </Text>
          <View className="mt-6 flex flex-row">
            <Icon1 name="infocirlce" size={14} color="black" />
            <Text className="ml-2 -mt-0.5 font-bold">Not at partner's usual location.</Text>
          </View>

          <View className="flex flex-row mt-6">
              <TouchableOpacity className="w-1/2 mr-1 items-center rounded-md border border-gray-300">
                <View className="px-4 py-1 flex flex-row gap-1">
                  <Icon1 className="items-center" name="adduser" size={24} color="black" />
                  <Text className="text-lg font-bold">Invite</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="w-1/2 ml-1 items-center rounded-md border border-gray-300">
                <View className="px-4 py-1 flex flex-row gap-1">
                  <Icon1 className="items-center" name="calendar" size={24} color="black" />
                  <Text className="text-lg font-bold">Add</Text>
                </View>
              </TouchableOpacity>
          </View>
          <Text className="mt-8 text-base text-gray-400 font-semibold">
            Outdoor Bootcamp: Bodyweight, Band Work & Beats.
          </Text>
          <View  className="border-b-2 border-black mt-2 w-24">
            <Text onPress={() => handleOpenURL('/')} className="mt-5 text-lg font-semibold">
              Read more
            </Text>
          </View>
        </View>
      </View>
      <View className=" mt-6 h-2 bg-gray-200"/> 

      <View className="px-4 mt-6">
        <Text className="mb-3 text-2xl font-bold">Reviews</Text>
        <View className="flex flex-row gap-1 items-center">
          <Text className="text-xl">4.9</Text>
          <Icon1 className="mt-1.5" name="star" size={16} color="black" />
          <Text className="text-xl"> (100+) </Text>
        </View>
        <View className="border-b-2 border-black mt-4 w-32">
            <Text onPress={() => handleOpenURL('/')} className="text-lg font-semibold">
              See all reviews
            </Text>
        </View>
      </View>

      <View className=" mt-6 h-2 bg-gray-200"/>

      <View className="px-4 mt-5">
        <Text className="mb-3 text-2xl font-bold">Cancellation Policy</Text>
        <Text className="text-base">
          Cancel 12 hours in advance to avoid a $8.00 late cancellation fee. A missed reservation will result in a $11.00 fee. 
        </Text>
        <View className="border-b-2 border-black mt-2 w-24">
            <Text onPress={() => handleOpenURL('/')} className="text-lg font-semibold">
              Learn more
            </Text>
        </View>
      </View>

      <View className=" mt-6 h-2 bg-gray-200"/>
      <View className="px-4 mb-4 mt-5">
        <Text className="mb-3 text-2xl font-bold">About</Text>
        <Text className="text-base">
          Join the revolutionary training camp and let's maintain a healthy lifestyle together.
        </Text>
      </View>
      
      </ScrollView> 

      {/* Footer: not scrollable */}
      <View className=" fixed bottom-0 left-0 right-0 bg-white">
      <View className="h-0.5 bg-gray-200"/>
      <View className="px-4 pb-4 pt-2 flex flex-row items-center">
        <View className="w-1/2 pl-3 flex flex-row gap-1 items-center">
          <Text className="text-base font-extrabold">3 credits</Text>
          <Text className=" text-gray-400 text-base">Good value</Text>
        </View>
        {/* Reserve Button */}
        <View className="w-1/2 items-center">
          <TouchableOpacity className={isReserved? 'bg-gray-500 px-6 py-2 rounded-full':'bg-blue-600 px-6 py-2 rounded-full'} onPress={handleReserve} disabled={isReserved}>
            <Text className="text-white font-bold text-base">{isReserved ? 'Reserved' : 'Reserve'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
