/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, View} from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import EventScreen from "../screens/EventScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import {MaterialCommunityIcons, Octicons} from "@expo/vector-icons";
import EventsScreen from "../screens/EventsScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectScreen from "../screens/ProjectScreen";
import EditMyAccountScreen from "../screens/EditMyAccountScreen";
import EditProjectScreen from "../screens/EditProjectScreen";
import MatchScreen from "../screens/MatchScreen";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {


    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
            />
            <Stack.Screen
                name="Event"
                component={EventScreen}
            />
            <Stack.Screen
                name='EditAccount'
                component={EditMyAccountScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Редактировать',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#16FF00',
                    },
                }}
            />
            <Stack.Screen
                name='EditProject'
                component={EditProjectScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Редактировать',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Stack.Screen
                name='Match'
                component={MatchScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Проекты',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Stack.Screen
                name="Project"
                component={ProjectScreen}
                options={{
                    headerShown: true,
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Stack.Screen
                name="StartHub"
                component={EventsScreen}
                options={{
                    headerShown: true,
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                }}
            />
            <Stack.Screen
                name="Projects"
                component={ProjectsScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Проекты физических лиц',
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerTitleStyle: {
                        fontSize: 17
                    }
                }}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoomScreen}
                options={({route}) => ({
                    headerShown: true,
                    headerTitle: route.params.name,
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerRight: () => (
                        <View style={{
                            flexDirection: 'row',
                            width: 60,
                            justifyContent: 'space-between',
                            marginRight: 10,
                        }}>
                            <Octicons name="search" size={22} color={'black'}/>
                            <MaterialCommunityIcons name="dots-vertical" size={22} color={'black'}/>
                        </View>
                    )
                })}
            />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
        </Stack.Navigator>
    );
}
