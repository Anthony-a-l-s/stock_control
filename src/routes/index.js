import React, { Component } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login'
import CreateUser from '../pages/CreateUser';

const Stack = createNativeStackNavigator();

export default class Routes extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name='CreateUser'
                    component={CreateUser}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        );
    }
}