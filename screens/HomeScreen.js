import { StyleSheet, Text, View,SafeAreaView,Image} from 'react-native'
import React from 'react'
import tw from "twrnc";
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-gray-200 h-full w-full `}> 
        <View style={tw `p-8`}>
            <Text style={styles.Text } >Auto
            </Text>
            <NavOptions/>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
        Text:{
            color:"black",
            fontSize:40,
            fontWeight:'bold'
        }
});