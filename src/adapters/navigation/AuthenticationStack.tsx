// Libraries
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Interfaces
import { AuthStackParamList } from '.';

// Screens
import { LoginScreen, WelcomeScreen } from '../screens';

const Stack = createNativeStackNavigator<AuthStackParamList, 'AuthStack'>();

export const AuthenticationStack = () => (
    <Stack.Navigator id="AuthStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
);
