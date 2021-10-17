import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import Barber from '../screens/Barber';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        //To declare what is going to be the first page
        initialRouteName="Preload"
        screenOptions={{
            //take off the header, appear just the content
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Barber" component={Barber} />
    </Stack.Navigator>
);