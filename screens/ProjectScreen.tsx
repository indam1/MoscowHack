import * as React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from "../constants/Colors";
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import {useNavigation, useRoute} from "@react-navigation/native";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getProject, getUser} from "../src/graphql/queries";
import {LinearGradient} from "expo-linear-gradient";
import {deleteProject, updateUser} from "../src/graphql/mutations";

export default function ProjectScreen() {
    const [user, setUser] = useState(null);
    const [proj, setProj] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params.id;

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


        const fetchProject = async () => {
            const projectInfo = await API.graphql(
                graphqlOperation(
                    getProject, {id: id}
                )
            )
            setProj(projectInfo.data.getProject);
        }

        fetchProject();
        fetchUser();
    }, [proj])

    const edit = () => {
        if (user.id === proj.author) {
            navigation.navigate('EditProject', {
                id: proj.id,
            });
        } else
            console.warn("it's not your project");
    }

    const del = async () => {
        if (user.id === proj.author) {
            await API.graphql(
                graphqlOperation(
                    deleteProject, {input: {id: proj.id}}
                )
            )
            await API.graphql(
                graphqlOperation(
                    updateUser, {input: {id: user.id, project: null}}
                )
            )
        } else
            console.warn("it's not your project");
    }

    if (!proj) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.logo} source={{uri: proj.imageUri}}/>

            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Мой проект</Text>
            </View>

            <View style={{marginBottom: 15}}>
                <Text style={{fontSize: 20}}>{proj.name}</Text>
            </View>


            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Отрасль</Text>
                <Text>{proj.branch}</Text>
            </View>

            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Лидер проекта</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>ФИО</Text>
                <Text>{proj.FIO}</Text>
            </View>

            <View style={styles.info}>
                <FontAwesome5
                    style={styles.icon}
                    size={32}
                    name={'phone-alt'}
                    color={'#00FFE9'}
                />
                <View style={styles.iconText}>
                    <Text style={{marginLeft: 20, fontSize: 15}}>Телефон{'\n'}{proj.phone}</Text>
                </View>
            </View>

            <View style={styles.info}>
                <Ionicons
                    style={styles.icon}
                    size={32}
                    name={'mail'}
                    color={'#00FFE9'}
                />
                <View style={styles.iconText}>
                    <Text style={{marginLeft: 20, fontSize: 15}}>E-mail{'\n'}{proj.email}</Text>
                </View>
            </View>

            <View style={{width: "90%", marginBottom: 10}}>
                <Text style={{color: "gray", marginBottom: 5}}>Команда проекта</Text>
                <FlatList data={proj.team} renderItem={({item}) => (<Text>{item}</Text>)}/>
            </View>

            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Технология проекта</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Описание</Text>
                <Text>{proj.description}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Уникальное преимущество</Text>
                <Text>{proj.advantage}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Стадия готовности</Text>
                <Text>{proj.stage}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 10}}>
                <Text style={{color: "gray", marginBottom: 5}}>Интеллектуальная собственность</Text>
                <Text>{proj.intellect}</Text>
            </View>

            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Рынок</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Потребность/проблема</Text>
                <Text>{proj.problem}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Рыночное применение</Text>
                <Text>{proj.marketUsage}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Емкость рынка и целевые потребители</Text>
                <Text>{proj.consumers}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 10}}>
                <Text style={{color: "gray", marginBottom: 5}}>Конкуренты</Text>
                <Text>{proj.competitors}</Text>
            </View>

            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>О проекте</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Дата запуска</Text>
                <Text>{proj.launchDate}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Опыт лидера</Text>
                <Text>{proj.experience}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Ресурсы и инфраструктура</Text>
                <Text>{proj.resources}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Текущее состояние проекта</Text>
                <Text>{proj.currentState}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>Модель внедрения</Text>
                <Text>{proj.model}</Text>
            </View>

            <View style={{width: "90%", marginBottom: 15}}>
                <Text style={{color: "gray", marginBottom: 5}}>План развития</Text>
                <Text>{proj.plan}</Text>
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
                    <Text style={{textAlign: "center"}}>Редактировать проект</Text>
                </TouchableOpacity>

                <LinearGradient style={{
                    width: "40%",
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                }} colors={["#16FF00", "#00FFE9"]}>
                    <TouchableOpacity onPress={del} style={{}}>
                        <Text style={{textAlign: "center"}}>Удалить проект</Text>
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
    snils: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "40%",
        marginBottom: 15,
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
        backgroundColor: Colors.light.background,
        borderRadius: 5,
        borderWidth: 1,
        color: Colors.light.text,
        textAlign: "center",
        textAlignVertical: "center",
        paddingHorizontal: 10,
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