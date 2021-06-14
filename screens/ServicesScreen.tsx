import * as React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {View} from '../components/Themed';
import services from "../data/Services";
import {useNavigation} from "@react-navigation/native";
import {LinearGradient} from "expo-linear-gradient";

export default function ServicesScreen() {
    const navigation = useNavigation();

    const proj = () => {
        navigation.navigate('Projects');
    }

    const starthub = () => {
        navigation.navigate('StartHub', {})
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={proj}>
                <View style={styles.listItem}>
                    <View style={styles.smth}>
                        <Text>{services[0]}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={starthub}>
                <View style={styles.listItem}>
                    <View style={styles.smth}>
                        <Text>{services[1]}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.listItem}>
                    <View style={styles.smth}>
                        <Text>Сервис</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.listItem}>
                    <View style={styles.smth}>
                        <Text>Сервис</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <View style={styles.listItem}>
                    <View style={styles.smth}>
                        <Text>Сервис</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: 'white',
        flexWrap: "wrap",
    },
    listItem: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        width: "44%",
        height: "30%",
        backgroundColor: '#C4C4C4',
        borderRadius: 6,
    },
    smth: {
        backgroundColor: '#C4C4C4',
        borderRadius: 6,
        marginLeft: 15,
        marginBottom: 15,
    },
});