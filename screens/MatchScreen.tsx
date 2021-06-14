import * as React from 'react';
import {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Colors from "../constants/Colors";
import {useRoute} from "@react-navigation/native";
import {API, graphqlOperation} from "aws-amplify";
import {listProjects} from "../src/graphql/queries";
import {Ionicons} from "@expo/vector-icons";

export default function MatchScreen() {
    const [project, setProject] = useState(null);
    const [num, setNum] = useState(0);

    const route = useRoute();
    const id = route.params.id;

    useEffect(() => {
        const fetchListProjects = async () => {
            const projectsInfo = await API.graphql(
                graphqlOperation(
                    listProjects
                )
            );
            if(projectsInfo.data.listProjects.items[num].id === id) {
                setNum(num + 1);
                setProject(projectsInfo.data.listProjects.items[num])
            }
            else
                setProject(projectsInfo.data.listProjects.items[num]);
        }
        fetchListProjects();
    }, [project])

    const like = () => {
        console.warn('Like. Your request is sent');
        if (num < 11)
            setNum(num+1);
    }

    const dislike = () => {
        console.warn("Dislike");
        if (num < 11)
            setNum(num+1);
    }

    if (!project)
        return null;

    return (
        <View style={styles.container}>
            <Text style={{alignSelf: "center", fontSize: 30, paddingBottom: "15%"}}>{project.name}</Text>

            <Image style={{alignSelf: "center", width: "90%", height: "60%"}} source={{uri: project.imageUri}}/>

            <View style={{width: "80%", flexDirection: "row", alignSelf: "center", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={dislike} style={{backgroundColor: "gray", borderRadius: 5, opacity: 0.4}}>
                    <Ionicons style={{opacity: 1}} name="close" size={75} color="red"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={like} style={{backgroundColor: "gray", borderRadius: 5, opacity: 0.4}}>
                    <Ionicons style={{opacity: 1}} name="heart" size={75} color="#16FF00"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: "center",
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