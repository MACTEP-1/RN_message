import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, ListRenderItem } from "react-native";
import { Message, RenderMessage } from "./Message";
import Styles from "./Styles";
import Socket from "./Socket";

type ChatProps = {
    username: string;
    image: string;
};

const Chat = ({ username, image }: ChatProps) => {
    let [messageInput, setMessageInput] = useState("");
    let [messageList, setMessageList] = useState<Message[]>([]);

    useEffect(() => {
        (async () => {
            try {
                if (Socket.state == "Disconnected") {
                    await Socket.start();
                }
            } catch (err) {
                console.log(err);
            }
        })();
        Socket.on("ReceiveMessage", (message) => {
            setMessageList((messageList) => {
                if (messageList.find((i) => i.id == message.id)) 
                    return messageList;
                return [...messageList, message];
            });
        });
    }, []);

    const renderItem: ListRenderItem<Message> = ({ item }) => (
        <RenderMessage message={item} username={username}></RenderMessage>
    );

    return (
        <View style={Styles.container}>
        <FlatList
          inverted
          data={messageList.sort((a, b) => b.timeStamp - a.timeStamp)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        ></FlatList>
  
        <View style={Styles.sendSection}>
          <TextInput
            style={Styles.chatTextInput}
            value={messageInput}
            onChangeText={(text) => setMessageInput(text)}
          ></TextInput>
          <Button
            title="Send"
            onPress={async () => {
              await Socket.invoke("SendMessage", {
                id: Math.random().toString(36).substring(7),
                text: messageInput,
                image: image,
                timeStamp: Date.now(),
                by: username,
              });
              setMessageInput("");
            }}
          ></Button>
        </View>
      </View>
    )
}

export default Chat;