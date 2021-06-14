import * as React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../assets/images/logotype.png';
import {Text, View} from "../components/Themed";
import Colors from "../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";

export default function FirstScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo}/>

            <Text style={styles.text}>Добро пожаловать!</Text>

            <TouchableOpacity>
                <Text style={styles.registration}>Регистрация</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <LinearGradient style={styles.login} colors={["#16FF00", "#00FFE9"]}>
                    <Text style={{
                        color: Colors.light.text,
                        fontSize: 20,
                    }}>Войти на mos.ru</Text>
                </LinearGradient>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.light.background,
    },
    logo: {
        width: "75%",
        height: "50%",
        resizeMode: 'contain',
    },
    text: {
        color: Colors.light.text,
        fontSize: 30,
    },
    registration: {
        marginTop: "30%",
        width: 250,
        height: 50,
        backgroundColor: Colors.light.background,
        borderRadius: 15,
        borderWidth: 1,
        color: Colors.light.text,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 20,
    },
    login: {
        marginTop: "5%",
        width: 250,
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
});