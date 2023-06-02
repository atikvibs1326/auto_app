import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from "twrnc";
import { Icon } from '@rneui/base';
import { RightOutlined } from '@ant-design/icons';
import { useNavigation } from '@react-navigation/native';





const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1648432113/assets/6e/86fff4-a82a-49b9-8b0b-54b341ea0790/original/Uber_Auto_312x208_pixels_Mobile.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen:"EatScreen",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={()=>navigation.navigate(item.screen)}

                 style={tw`p-2 pl-6 pb-8 pt-4 bg-blue-200 m-2 w-40 `}>
                    <View>
                        <Image
                            style={{ width: 120, height: 120, resizeMode: 'contain' }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="right"
                            type="antdesign"
                            color="white" />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions

