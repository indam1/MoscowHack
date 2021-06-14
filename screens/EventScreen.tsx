import * as React from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from "../constants/Colors";
import events from "../data/Events";
import {Ionicons} from "@expo/vector-icons";
import {useRoute} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

export default function EventScreen() {
    const route = useRoute();

    const id = route.params.id;

    const event = events[events.findIndex(word => word.id === id)];

    const req = () => {
        console.warn("Request is sent");
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.back}>
                <Image source={{uri: event.imageUri}} resizeMode='cover' style={{flex: 1}}/>
            </View>


            <ScrollView
                contentContainerStyle={{
                    alignItems: "center",
                    flexGrow: 1,
                    top: "35%",
                    backgroundColor: 'white',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingBottom: 350,
                }}>
                <View style={{marginRight: "55%", marginBottom: 10, marginTop: 10}}>
                    <Text style={{fontSize: 25, fontWeight: "bold"}}>{event.name}</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "90%", marginBottom: 15}}>
                    <View style={{width: "50%"}}>
                        <View style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Ionicons name={'time'} size={15} color={'gray'}/>
                            <Text style={{color: "gray"}}>{event.date}</Text>
                            <Text style={{color: "gray"}}>{event.time}</Text>
                        </View>

                        <View style={{
                            width: "50%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Ionicons name={'location-sharp'} size={15} color={'gray'}/>
                            <Text style={{color: "gray"}}>{event.address}</Text>
                        </View>
                    </View>

                    <View>
                        <Text>{event.website}</Text>
                        <Text>{event.email}</Text>
                    </View>
                </View>

                <View style={{alignSelf: "flex-start", marginLeft: "10%", width: "80%"}}>
                    <Text style={{fontSize: 15}}>О мероприятии</Text>
                </View>

                <View style={{alignSelf: "flex-start", marginLeft: "10%", width: "80%"}}>
                    <Text style={{fontSize: 15}}>{event.fullDescription}</Text>
                </View>
            </ScrollView>

            <View style={{alignItems: "center"}}>
                <View style={{
                    position: 'absolute',
                    bottom: 10,
                    width: "88%",
                    height: 40,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        backgroundColor: "black",
                        borderRadius: 10,
                        width: "13%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Ionicons name={'star'} size={20} color={"#FFC700"}/>
                    </View>
                    <View style={{
                        width: "40%",
                        backgroundColor: "black",
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{color: "white", fontSize: 10}}>Добавить в календарь</Text>
                    </View>

                    <LinearGradient style={{
                        width: "40%",
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center"
                    }} colors={["#16FF00", "#00FFE9"]}>
                        <TouchableOpacity onPress={req}>
                            <Text style={{color: "black", fontSize: 10}}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    back: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});