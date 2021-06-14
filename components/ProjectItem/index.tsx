import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Image, Text, TouchableWithoutFeedback, View} from "react-native";
import {Event, Project} from "../../types";

export type ProjectItemProps = {
    project: Project;
}

const ProjectItem = (props: ProjectItemProps) => {
    const {project} = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate('Project', {
            id: project.id,
            authorId: project.author,
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={{
                justifyContent: "flex-end",
                alignItems: "flex-start",
                margin: 10,
                width: "44%",
                height: 150,
                backgroundColor: '#C4C4C4',
                borderRadius: 20,
            }}>
                <Image
                    source={{uri: project.imageUri}} style={{width: "100%", height: "100%", borderRadius: 20}}
                />
                <View style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    width: "100%",
                    height: "35%",
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}>
                    <Text
                        style={{marginLeft: "5%", marginTop: "1%", color: 'white', fontSize: 20}}>{project.name}
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ProjectItem;