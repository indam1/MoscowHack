import * as React from 'react';
import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProjectItem from "../components/ProjectItem";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {getUser, listProjects} from "../src/graphql/queries";
import {createProject, updateUser} from "../src/graphql/mutations";
import {useNavigation} from "@react-navigation/native";

export default function ProjectsScreen() {
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState(null);
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

        const fetchListProjects = async () => {
            const projectsInfo = await API.graphql(
                graphqlOperation(
                    listProjects
                )
            )
            setProjects(projectsInfo.data.listProjects.items);
        }

        fetchListProjects();
        fetchUser();
    }, [projects])

    const updateUserProject = async (proj: String) => {
        const updatedUser = await API.graphql(
            graphqlOperation(
                updateUser, {
                    input: {
                        id: user.id,
                        project: proj,
                    }
                }
            )
        )

        setUser(updatedUser);
    }

    const myProj = () => {
        if (user.project) {
            navigation.navigate('Project', {
                id: user.project,
                authorId: user.project.author,
            });
        } else
            console.warn("you haven't a project");
    }

    const createProj = async () => {
        if (user.project)
            console.warn("you have already created a project");
        else {
            const newProject = await API.graphql(
                graphqlOperation(
                    createProject, {
                        input: {
                            author: user.id,
                            branch: "Branch",
                            name: "MyProject",
                            FIO: user.name,
                            phone: user.phone,
                            email: user.email,
                            imageUri: "http://s1.iconbird.com/ico/2014/1/597/w512h5121390846288cat512.png",
                        }
                    }
                )
            )

            await updateUserProject(newProject.data.createProject.id);
        }
    }

    const search = async() => {
        if(user.project) {
            navigation.navigate('Match', {
                id: user.project,
            })
        } else {

        }
    }


    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", width: "90%", alignSelf: "center"}}>
                <TouchableOpacity onPress={myProj} style={{
                    width: "40%",
                    height: 50,
                    backgroundColor: 'white',
                    elevation: 24,
                    margin: 10,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Мой проект</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={createProj} style={{width: "20%", margin: 10, height: 50}}>
                    <LinearGradient style={{
                        height: "100%",
                        borderRadius: 5, justifyContent: "center",
                        alignItems: "center"
                    }} colors={["#16FF00", "#00FFE9"]}>
                        <Ionicons name="add" size={40} color="black"/>

                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={search} style={{width: "20%", margin: 10, height: 50}}>
                    <LinearGradient style={{
                        height: "100%",
                        borderRadius: 5, justifyContent: "center",
                        alignItems: "center"
                    }} colors={["#16FF00", "#00FFE9"]}>
                        <Ionicons name="search" size={40} color="black"/>

                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={{width: "100%"}}
                numColumns={2}
                data={projects}
                renderItem={({item}) => <ProjectItem project={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});