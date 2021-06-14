import * as React from 'react';
import {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from "../constants/Colors";

import {API, Auth, graphqlOperation} from 'aws-amplify';
import {getUser} from "../src/graphql/queries";
import {updateUser} from "../src/graphql/mutations";
import {LinearGradient} from "expo-linear-gradient";

export default function EditMyAccountScreen() {
    const [user, setUser] = useState(null);
    const [tAbout, setAbout] = useState("");
    const [tCompany, setCompany] = useState("");
    const [tDegree, setDegree] = useState("");
    const [tEDS, setEDS] = useState("");
    const [tEDW, setEDW] = useState("");
    const [tName, setName] = useState("");
    const [tPosition, setPosition] = useState("");
    const [tSnils, setSnils] = useState("");
    const [tSpec, setSpec] = useState("");
    const [tSDS, setSDS] = useState("");
    const [tSDW, setSDW] = useState("");
    const [tStudy, setStudy] = useState("");
    const [tSite, setSite] = useState("");
    const [tPhone, setPhone] = useState("");
    const [tEmail, setEmail] = useState("");
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
            setAbout(tempUser.data.getUser.about);
            setName(tempUser.data.getUser.name);
            setCompany(tempUser.data.getUser.company);
            setDegree(tempUser.data.getUser.degree);
            setEmail(tempUser.data.getUser.email);
            setEDS(tempUser.data.getUser.endDateStudy);
            setEDW(tempUser.data.getUser.endDateWork);
            setPhone(tempUser.data.getUser.phone);
            setPosition(tempUser.data.getUser.position);
            setSnils(tempUser.data.getUser.snils);
            setSpec(tempUser.data.getUser.specialization);
            setSDS(tempUser.data.getUser.startDateStudy);
            setSDW(tempUser.data.getUser.startDateWork);
            setStudy(tempUser.data.getUser.studyPlace);
            setSite(tempUser.data.getUser.website);
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])

    const back = () => {
        setAbout(user.about);
        setName(user.name);
        setCompany(user.company);
        setDegree(user.degree);
        setEmail(user.email);
        setEDS(user.endDateStudy);
        setEDW(user.endDateWork);
        setPhone(user.phone);
        setPosition(user.position);
        setSnils(user.snils);
        setSpec(user.specialization);
        setSDS(user.startDateStudy);
        setSDW(user.startDateWork);
        setStudy(user.studyPlace);
        setSite(user.website);
    }

    const save = async () => {
        await API.graphql(
            graphqlOperation(
                updateUser, {
                    input: {
                        id: user.id,
                        name: tName,
                        snils: tSnils,
                        about: tAbout,
                        phone: tPhone,
                        website: tSite,
                        email: tEmail,
                        company: tCompany,
                        position: tPosition,
                        startDateWork: tSDS,
                        endDateWork: tEDW,
                        studyPlace: tStudy,
                        specialization: tSpec,
                        degree: tDegree,
                        startDateStudy: tSDS,
                        endDateStudy: tEDS,
                    }
                }
            )
        )
        await fetchUser();
    }

    if (!user) {
        return null;
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image style={styles.logo} source={{uri: user.imageUri}}/>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Имя</Text>
                    <TextInput
                        style={styles.input}
                        value={tName}
                        onChangeText={setName}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>СНИЛС</Text>
                    <TextInput
                        style={styles.input}
                        value={tSnils}
                        onChangeText={setSnils}
                    />
                </View>


                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text style={{color: 'black'}}>Обо мне</Text>
                    <TextInput
                        style={styles.input}
                        value={tAbout}
                        onChangeText={setAbout}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Телефон</Text>
                    <TextInput
                        style={styles.input}
                        value={tPhone}
                        onChangeText={setPhone}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Соц сети</Text>
                    <TextInput
                        style={styles.input}
                        value={tSite}
                        onChangeText={setSite}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={tEmail}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>Компетенции</Text>
                </View>

                <View style={{width: "90%", flexDirection: "row", flexWrap: 'wrap', marginBottom: "5%"}}>
                    <Text style={styles.competence}>UX/UI Design</Text>
                    <Text style={styles.competence}>Web-developer</Text>
                    <Text style={styles.competence}>Software-engineer</Text>
                </View>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>Опыт работы</Text>
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Компания</Text>
                    <TextInput
                        style={styles.input}
                        value={tCompany}
                        onChangeText={setCompany}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Должность</Text>
                    <TextInput
                        style={styles.input}
                        value={tPosition}
                        onChangeText={setPosition}
                    />
                </View>

                <View style={{
                    width: "90%",
                    height: 50,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 20
                }}>
                    <View style={{width: "50%", height: "100%"}}>
                        <Text>Дата начала</Text>
                        <TextInput
                            style={styles.input}
                            value={tSDW}
                            onChangeText={setSDW}
                        />
                    </View>

                    <View style={{width: "50%", height: "100%"}}>
                        <Text>Дата окончания</Text>
                        <TextInput
                            style={styles.input}
                            value={tEDW}
                            onChangeText={setEDW}
                        />
                    </View>
                </View>

                <View style={{width: "100%", height: 25, marginLeft: "10%"}}>
                    <Text style={{color: "gray"}}>Образование</Text>
                </View>
                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Учебное заведение</Text>
                    <TextInput
                        style={styles.input}
                        value={tStudy}
                        onChangeText={setStudy}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Специализация</Text>
                    <TextInput
                        style={styles.input}
                        value={tSpec}
                        onChangeText={setSpec}
                    />
                </View>

                <View style={{width: "100%", height: 50, marginLeft: "10%"}}>
                    <Text>Степень</Text>
                    <TextInput
                        style={styles.input}
                        value={tDegree}
                        onChangeText={setDegree}
                    />
                </View>

                <View style={{
                    width: "90%",
                    height: "5%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 20
                }}>
                    <View style={{width: "50%", height: "100%"}}>
                        <Text>Дата начала</Text>
                        <TextInput
                            style={styles.input}
                            value={tSDS}
                            onChangeText={setSDS}
                        />
                    </View>

                    <View style={{width: "50%", height: "100%"}}>
                        <Text>Дата окончания</Text>
                        <TextInput
                            style={styles.input}
                            value={tEDS}
                            onChangeText={setEDS}
                        />
                    </View>
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