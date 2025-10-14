// Libraries
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Interfaces
import { RootStackParamList } from './interface/types';

// Stacks
import { AuthenticationStack } from './AuthenticationStack';
import { HomeStack } from './HomeStack';

const Stack = createNativeStackNavigator<RootStackParamList, 'RootStack'>();

export const RootStack = () => {
    return (
        <Stack.Navigator id="RootStack" screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="AuthStack" component={AuthenticationStack} />
            <Stack.Screen name="HomeStack" component={HomeStack} options={{ animation: 'fade_from_bottom' }} />
        </Stack.Navigator>
    );
};
