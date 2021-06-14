import * as React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from "../constants/Colors";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {useEffect, useState} from "react";
import {getUser} from "../src/graphql/queries";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

export default function MyAccountScreen() {
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();

            if (userInfo) {
                const tempUser = await API.graphql(
                    graphqlOperation(
                        getUser,
                        {id: userInfo.attributes.sub}
                    )
                )
                setUser(tempUser.data.getUser);
            }
        }

        fetchUser();
    }, [user])

    const edit = () => {
        navigation.navigate('EditAccount');
    }

    const exit = async () => {
        await Auth.signOut();
    }

    if (!user) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={{uri: user.imageUri}}/>

            <View style={{marginBottom: 5}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>{user.name}</Text>
            </View>

            <View style={{marginBottom: 5}}>
                <Text>СНИЛС{'   '}{user.snils}</Text>
            </View>


            <View>
                <Text style={{color: "gray", marginBottom: 15}}>Обо мне</Text>
            </View>

            <Text style={{width: "90%", marginBottom: "10%"}}>{user.about}</Text>

            <View style={styles.info}>
                <FontAwesome5
                    style={styles.icon}
                    size={32}
                    name={'phone-alt'}
                    color={'black'}
                />
                <View style={styles.iconText}>
                    <Text style={{marginLeft: 20, fontSize: 15}}>Телефон{'\n'}{user.phone}</Text>
                </View>
            </View>

            <View style={styles.info}>
                <Ionicons
                    style={styles.icon}
                    size={32}
                    name={'share-social'}
                    color={'black'}
                />
                <View style={styles.iconText}>
                    <Text style={{marginLeft: 20, fontSize: 15}}>Соц сети{'\n'}{user.website}</Text>
                </View>
            </View>

            <View style={styles.info}>
                <Ionicons
                    style={styles.icon}
                    size={32}
                    name={'mail'}
                    color={'black'}
                />
                <View style={styles.iconText}>
                    <Text style={{marginLeft: 20, fontSize: 15}}>E-mail{'\n'}{user.email}</Text>
                </View>
            </View>

            <Text style={{width: "90%", color: "gray", marginBottom: 15}}>Компетенции</Text>
            <View style={{width: "90%", flexDirection: "row", flexWrap: 'wrap', marginBottom: 32}}>
                <LinearGradient style={{borderRadius: 5, margin: 5}}
                                colors={["#16FF00", "#00FFE9"]}>
                    <Text style={styles.competence}>UX/UI Design</Text>
                </LinearGradient>
                <LinearGradient style={{borderRadius: 5, justifyContent: "center", alignItems: "center", margin: 5}}
                                colors={["#16FF00", "#00FFE9"]}>
                    <Text style={styles.competence}>Web-developer</Text>
                </LinearGradient>
                <LinearGradient style={{borderRadius: 5, justifyContent: "center", alignItems: "center", margin: 5}}
                                colors={["#16FF00", "#00FFE9"]}>
                    <Text style={styles.competence}>Software-engineer</Text>
                </LinearGradient>
            </View>

            <Text style={{width: "90%", color: "gray", marginBottom: 15}}>Опыт работы</Text>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={styles.textBot}>Компания</Text>
                <Text>{user.company}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={styles.textBot}>Должность</Text>
                <Text>{user.position}</Text>
            </View>

            <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginBottom: 32}}>
                <View>
                    <Text style={styles.textBot}>Дата начала</Text>
                    <Text>{user.startDateWork}</Text>
                </View>

                <View>
                    <Text style={styles.textBot}>Дата окончания</Text>
                    <Text>{user.endDateWork}</Text>
                </View>
            </View>

            <Text style={{width: "90%", color: "gray", marginBottom: 15}}>Образование</Text>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={styles.textBot}>Учебное заведение</Text>
                <Text>{user.studyPlace}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={styles.textBot}>Специализация</Text>
                <Text>{user.specialization}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={styles.textBot}>Степень</Text>
                <Text>{user.degree}</Text>
            </View>

            <View style={{width: "90%", flexDirection: "row", justifyContent: "space-between", marginBottom: 44}}>
                <View>
                    <Text style={styles.textBot}>Дата начала</Text>
                    <Text>{user.startDateStudy}</Text>
                </View>

                <View>
                    <Text style={styles.textBot}>Дата окончания</Text>
                    <Text>{user.endDateStudy}</Text>
                </View>
            </View>
            <View style={{
                flexDirection: "row", width: "90%",
                height: 50, justifyContent: "space-around", marginBottom: 20
            }}>
                <TouchableOpacity onPress={edit} style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40%",
                    backgroundColor: 'white',
                    elevation: 10,
                    borderRadius: 10
                }}>
                    <Text style={{textAlign: "center"}}>Редактировать профиль</Text>
                </TouchableOpacity>

                <LinearGradient style={{
                    width: "40%",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                }} colors={["#16FF00", "#00FFE9"]}>
                    <TouchableOpacity onPress={exit} style={{}}>
                        <Text>Выйти из аккаунта</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10
    },
    info: {
        width: "90%",
        height: 50,
        flexDirection: "row",
        marginBottom: "3%",
        alignItems: "center",
    },
    competence: {
        height: 25,
        color: Colors.light.text,
        paddingHorizontal: 10,
        textAlign: "center",
        textAlignVertical: "center"
    },
    icon: {
        borderRadius: 6,
        elevation: 24, backgroundColor: 'white',
        padding: 10,
    },
    iconText: {
        backgroundColor: '#EEEEEE',
        justifyContent: "center",
        width: "85%",
        height: "100%",

        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    textBot: {
        fontWeight: "bold",
        marginBottom: 5,
    }
});