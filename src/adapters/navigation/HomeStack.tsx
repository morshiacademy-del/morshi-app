// Libraries
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Interfaces
import { HomeStackParamList } from './interface/types';

// Screens
import { CourseDetailsScreen, DetailsEnrolledCoursesScreen, DetailsProfileScreen } from '../screens';

// Navigation
import { TabNavigationStack } from './TabNavigationStack';

const Stack = createNativeStackNavigator<HomeStackParamList, 'HomeStack'>();

export const HomeStack = () => {
    return (
        <Stack.Navigator id="HomeStack" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="TabNavigationStack"
                component={TabNavigationStack}
                options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="CourseDetailsScreen" component={CourseDetailsScreen} />
            <Stack.Screen name="DetailsEnrolledCoursesScreen" component={DetailsEnrolledCoursesScreen} />
            <Stack.Screen name="DetailsProfileScreen" component={DetailsProfileScreen} />
        </Stack.Navigator>
    );
};
