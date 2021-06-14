import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';

import {useRoute} from '@react-navigation/native';

import chats from "../data/Chats";
import ChatMessage from "../components/ChatMessage";
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {

    const route = useRoute();

    const id = route.params.id;

    const chat = chats[chats.findIndex(word => word.id === id)];

    return (
        <View style={{width: "100%", height: "100%", backgroundColor: 'white'}}>
            <FlatList
                data={chat.messages}
                renderItem={({item}) => <ChatMessage message={item}/>}
                inverted
            />
            <View style={{backgroundColor: 'black', height: 1}}></View>
            <InputBox/>
        </View>

    );
}

export default ChatRoomScreen;
