import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from "../constants/Colors";

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {getProject, getUser} from "../src/graphql/queries";
import {updateProject, updateUser} from "../src/graphql/mutations";
import {LinearGradient} from "expo-linear-gradient";
import {useRoute} from "@react-navigation/native";

export default function EditProjectScreen() {
    const route = useRoute();
    const id = route.params.id;

    const [proj, setProj] = useState(null);
    const [tName, setName] = useState("null");
    const [tBranch, setBranch] = useState("null");
    const [tDesc, setDesc] = useState("null");
    const [tAdv, setAdv] = useState("null");
    const [tStage, setStage] = useState("null");
    const [tIntellect, setIntellect] = useState("null");
    const [tProblem, setProblem] = useState("null");
    const [tMarkUse, setMarkUse] = useState("null");
    const [tCons, setCons] = useState("null");
    const [tCompet, setCompet] = useState("null");
    const [tLaunch, setLaunch] = useState("null");
    const [tExp, setExp] = useState("null");
    const [tRes, setRes] = useState("null");
    const [tState, setState] = useState("null");
    const [tModel, setModel] = useState("null");
    const [tPlan, setPlan] = useState("null");

    const fetchProject = async () => {
        const tempProject = await API.graphql(
            graphqlOperation(
                getProject,
                {id: id}
            )
        )
        setProj(tempProject.data.getProject);
        setName(tempProject.data.getProject.name);
        setBranch(tempProject.data.getProject.branch);
        setDesc(tempProject.data.getProject.description);
        setAdv(tempProject.data.getProject.advantage);
        setStage(tempProject.data.getProject.stage);
        setIntellect(tempProject.data.getProject.intellect);
        setProblem(tempProject.data.getProject.problem);
        setMarkUse(tempProject.data.getProject.marketUsage);
        setCons(tempProject.data.getProject.consumers);
        setCompet(tempProject.data.getProject.competitors);
        setLaunch(tempProject.data.getProject.launchDate);
        setExp(tempProject.data.getProject.experience);
        setRes(tempProject.data.getProject.resources);
        setState(tempProject.data.getProject.currentState);
        setModel(tempProject.data.getProject.model);
        setPlan(tempProject.data.getProject.plan);
    }
    useEffect(() => {
        fetchProject();
    }, [])

    const back = () => {
        setName(proj.name);
        setBranch(proj.branch);
        setDesc(proj.description);
        setAdv(proj.advantage);
        setStage(proj.stage);
        setIntellect(proj.intellect);
        setProblem(proj.problem);
        setMarkUse(proj.marketUsage);
        setCons(proj.consumers);
        setCompet(proj.competitors);
        setLaunch(proj.launchDate);
        setExp(proj.experience);
        setRes(proj.resources);
        setState(proj.currentState);
        setModel(proj.model);
        setPlan(proj.plan);
    }

    const save = async () => {
        await API.graphql(
            graphqlOperation(
                updateProject, {
                    input: {
                        id: proj.id,
                        branch: tBranch,
                        name: tName,
                        description: tDesc,
                        advantage: tAdv,
                        stage: tStage,
                        intellect: tIntellect,
                        problem: tProblem,
                        marketUsage: tMarkUse,
                        consumers: tCons,
                        competitors: tCompet,
                        launchDate: tLaunch,
                        experience: tExp,
                        resources: tRes,
                        currentState: tState,
                        model: tModel,
                        plan: tPlan
                    }
                }
            )
        )
        await fetchProject();
    }

    if (!proj) {
        return null;
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={{uri: proj.imageUri}}/>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>Мой проект</Text>
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Название проекта</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tName}
                        onChangeText={setName}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Отрасль</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tBranch}
                        onChangeText={setBranch}
                    />
                </View>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>Технология проекта</Text>
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text style={{color: 'black'}}>Описание</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tDesc}
                        onChangeText={setDesc}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Уникальное преимущество</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tAdv}
                        onChangeText={setAdv}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Стадия готовности</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tStage}
                        onChangeText={setStage}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Интеллектуальная собственность</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tIntellect}
                        onChangeText={setIntellect}
                    />
                </View>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>Рынок</Text>
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Потребность/проблема</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tProblem}
                        onChangeText={setProblem}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Рыночное применение</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tMarkUse}
                        onChangeText={setMarkUse}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Емкость рынка и целевые потребители</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tCons}
                        onChangeText={setCons}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Конкуренты</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tCompet}
                        onChangeText={setCompet}
                    />
                </View>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>О проекте</Text>
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Дата запуска</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tLaunch}
                        onChangeText={setLaunch}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Опыт лидера</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tExp}
                        onChangeText={setExp}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Ресурсы и инфраструктура</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tRes}
                        onChangeText={setRes}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Текущее состояние проекта</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tState}
                        onChangeText={setState}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Модель внедрения</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={tModel}
                        onChangeText={setModel}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>План развития</Text>
                    <TextInput
                        multiline
                        numberOfLines={6}
                        style={styles.input}
                        value={tPlan}
                        onChangeText={setPlan}
                    />
                </View>

                <View style={{
                    flexDirection: "row", width: "90%",
                    height: 50, justifyContent: "space-around", marginBottom: 20
                }}>
                    <TouchableOpacity onPress={back} style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "40%",
                        backgroundColor: 'white',
                        elevation: 10,
                        borderRadius: 10
                    }}>
                        <Text style={{textAlign: "center"}}>Отменить</Text>
                    </TouchableOpacity>

                    <LinearGradient style={{
                        width: "40%",
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                    }} colors={["#16FF00", "#00FFE9"]}>
                        <TouchableOpacity onPress={save} style={{}}>
                            <Text>Сохранить</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
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
    input: {
        textAlign: "left",
        paddingLeft: 4,
        width: "90%",
        height: "50%",
        backgroundColor: 'gray',
        borderRadius: 10,
    }
});