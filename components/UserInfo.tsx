import React, { useState } from "react";
import { View, TextInput, Button, Image, Text } from "react-native";
import Styles from "./Styles";
import ImageChooser from "./ImagePick";
const UserInfo = () => {
    const[name, setName] = useState("");
    const[image, setImage] = useState("");
    return (
        <View style={Styles.personalInfoContainer}>
            <Image 
                style={Styles.logo}
                source={require("../assets/logo2.jpg")}
            ></Image>

            <View style={Styles.enterYourName}>
                <Text style={Styles.nameText}>Enter name:</Text>
                <TextInput style={Styles.nameTextInput} 
                    onChangeText={(text) => setName(text)}
                    value = {name}
                />
            </View>

            <ImageChooser onChangeImage={(image) => setImage(image)} />

            <Button title="Start" onPress={() => {}} />
        </View>
    );
}

export default UserInfo;