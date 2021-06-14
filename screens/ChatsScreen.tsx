import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import Colors from "../constants/Colors";
import chatRooms from "../data/ChatRooms";
import ChatItem from "../components/ChatItem";

export default function ChatsScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                style={{width: '100%'}}
                data={chatRooms}
                renderItem={({item}) => <ChatItem chatRoom={item}/>}
                keyExtractor={(item) => item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.background,
    },

});