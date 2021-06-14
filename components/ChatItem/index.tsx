import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {ChatRoom} from "../../types";
import {useNavigation} from '@react-navigation/native';
import styles from "./style";
import moment from "moment";


export type ChatItemProps = {
    chatRoom: ChatRoom;
}

const ChatItem = (props: ChatItemProps) => {
    const {chatRoom} = props;
    const user = chatRoom.users[1];

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: chatRoom.users[1].name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{uri: user.imageUri}} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text
                            numberOfLines={1}
                            style={styles.lastMessage}>{chatRoom.lastMessage.content}
                        </Text>
                    </View>
                </View>

                <Text style={styles.time}>
                    {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).fromNow()}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatItem;