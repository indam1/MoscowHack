import React, {useState} from "react";
import {TextInput, TouchableOpacity, View} from "react-native";
import styles from "./style";
import {AntDesign, Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const InputBox = () => {
    const [message, setMessage] = useState('');

    const onPress = () => {
        console.warn(`Send: ${message}`);

        setMessage('');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer2}>
                    <MaterialIcons name="add" size={40} color="black"/>
                </View>
            </TouchableOpacity>

            <View style={styles.mainContainer}>
                <TextInput
                    placeholder="Написать сообщение..."
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage}
                />
            </View>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer1}>
                    <AntDesign name="arrowup" size={40} color="black"/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;