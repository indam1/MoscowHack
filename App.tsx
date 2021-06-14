import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {Auth, Amplify, API, graphqlOperation} from "aws-amplify";
import awsExports from "./src/aws-exports";

import AmplifyTheme from "./components/AmplifyTheme";
import {withAuthenticator} from "aws-amplify-react-native";
import {getUser} from "./src/graphql/queries";
import {createUser} from "./src/graphql/mutations";

Amplify.configure(awsExports);


function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    useEffect(() => {
        const fetchUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});

            if (userInfo) {
                const userData = await API.graphql(
                    graphqlOperation(
                        getUser,
                        {id: userInfo.attributes.sub}
                    )
                )

                if (userData.data.getUser) {
                    console.log("User is already registered in database");
                    return;
                }

                const newUser = {
                    id: userInfo.attributes.sub,
                    phone: userInfo.attributes.phone_number,
                    email: userInfo.attributes.email,
                    imageUri: "http://s1.iconbird.com/ico/2014/1/597/w512h5121390846288cat512.png"
                }

                await API.graphql(
                    graphqlOperation(
                        createUser,
                        {input: newUser}
                    )
                )
            }
        }

        fetchUser();
    }, [])

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme}/>
                <StatusBar/>
            </SafeAreaProvider>
        );
    }
}


const signUpConfig = {
    header: "Регистрация",
    defaultCountryCode: '7',
    signUpFields: [
        {
            label: 'Email',
            key: 'email',
            required: true,
            displayOrder: 1,
            type: 'string'
        }, {
            label: 'Password',
            key: 'password',
            required: true,
            displayOrder: 2,
            type: 'password'
        }
    ],

};

export default withAuthenticator(App, false, [], null, AmplifyTheme, signUpConfig);
//export default App;
