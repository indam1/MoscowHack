import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text, View} from '../components/Themed';
import Colors from "../constants/Colors";
import {AntDesign} from "@expo/vector-icons";
import EventItem from "../components/EventItem";
import events from "../data/Events"

export default function EventsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.events}>
                <Text style={{color: 'black', fontSize: 20}}>Мои мероприятия</Text>
                <View style={styles.array}>
                    <AntDesign name="right" size={30} color="black"/>
                </View>
            </View>


            <FlatList
                data={events}
                renderItem={({item}) => <EventItem event={item}/>}
                horizontal
            />


            <View style={styles.events}>
                <Text style={{color: 'black', fontSize: 20}}>Рекомендации</Text>
                <View style={styles.array}>
                    <AntDesign name="right" size={30} color="black"/>
                </View>
            </View>

            <FlatList
                data={events}
                renderItem={({item}) => <EventItem event={item}/>}
                horizontal
                inverted
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    events: {
        width: "90%",
        flexDirection: "row",
        backgroundColor: Colors.light.background,
        justifyContent: "space-between",
    },
    array: {
        borderRadius: 100,
        backgroundColor: Colors.light.background,
        elevation: 1,
    },
    event: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        borderRadius: 10,
        fontSize: 10,
    },
});