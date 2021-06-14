/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {BottomTabParamList, TabFourParamList, TabOneParamList, TabThreeParamList, TabTwoParamList} from '../types';
import FirstScreen from "../screens/FirstScreen";
import ChatsScreen from "../screens/ChatsScreen";
import {createStackNavigator} from "@react-navigation/stack";
import {View} from "../components/Themed";
import MyAccountScreen from "../screens/MyAccountScreen";
import ServicesScreen from "../screens/ServicesScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabTwo"
            tabBarOptions={{
                activeBackgroundColor: '#16FF00',
                style: {
                    height: "12%",
                    backgroundColor: Colors.light.background,
                },
                tabStyle: {
                    borderRadius: 100,
                    margin: 15,
                }

            }}>
            <BottomTab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Feather name="home" size={26} color={Colors.light.text}/>,
                }}
            />
            <BottomTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Feather name="message-circle" size={26} color={Colors.light.text}/>,
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={TabThreeNavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Feather name="users" size={26} color={Colors.light.text}/>,
                }}
            />
            <BottomTab.Screen
                name="TabFour"
                component={TabFourNavigator}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => <Feather name="user" size={26} color={Colors.light.text}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="ChatsScreen"
                component={FirstScreen}
                options={{
                    headerTitle: 'Новости',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerRight: () => (
                        <View style={{
                            flexDirection: "row",
                            backgroundColor: "white",
                            marginRight: 20,

                        }}>
                            <Ionicons style={{elevation: 30}} name="search-circle-outline" size={30} color="black"/>
                            <AntDesign name="pluscircle" size={30} color="#16FF00"/>
                        </View>
                    ),
                }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={ChatsScreen}
                options={{
                    headerTitle: 'Чаты',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerRight: () => (
                        <AntDesign style={{marginRight: 20}} name="addusergroup" size={26} color="#16FF00"/>
                    ),
                }}
            />
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="TabThreeScreen"
                component={ServicesScreen}
                options={{
                    headerTitle: 'Сервисы',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
        </TabThreeStack.Navigator>
    );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
    return (
        <TabFourStack.Navigator>
            <TabFourStack.Screen
                name="TabFourScreen"
                component={MyAccountScreen}
                options={{
                    headerTitle: '',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#16FF00',
                    },
                }}
            />
        </TabFourStack.Navigator>
    );
}
