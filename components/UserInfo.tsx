import React from "react";
import { View, TextInput, Button, Image, Text } from "react-native";

const UserInfo = () => {
    return (
        <View>
            <Image source={require("../assets/logo2.jpg")}/>

            <View>
                <Text>Enter YOUR name:</Text>
                <TextInput />
            </View>

            <Button title="Start" onPress={() => {}} />
        </View>
    );
}

export default UserInfo;