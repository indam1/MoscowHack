import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {Event} from "../../types";

export type EventItemProps = {
    event: Event;
}

const EventItem = (props: EventItemProps) => {
    const {event} = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('Event', {
            id: event.id,
            name: event.name,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={{width: 300, backgroundColor: 'black', borderRadius: 20, margin: 10}}>
                <Image
                    source={{uri: event.imageUri}} style={{width: "100%", height: "100%", borderRadius: 20}}
                />
                <View style={{position: "absolute", bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', width: "100%", height: "35%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                    <Text style={{marginLeft: "5%", marginTop: "1%", color: 'white', fontSize: 20}}>{event.name}</Text>
                    <Text style={{marginLeft: "5%", marginTop: "1%", color: 'white', fontSize: 12}}>{event.date}</Text>
                    <Text style={{marginLeft: "5%", color: 'white', fontSize: 12}}>{event.address}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default EventItem;