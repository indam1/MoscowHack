import React from "react";
import {Message} from "../../types";
import styles from "./style";
import {Text, View} from "react-native";
import moment from "moment";

export type ChatMessageProps = {
    message: Message,
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message} = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    borderColor: isMyMessage() ? '' : "#A5A5A5",
                    borderWidth: isMyMessage() ? 0 : 1,
                    backgroundColor: isMyMessage() ? '#EEEEEE' : 'white',
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    )
};

export default ChatMessage;