// Libraries
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { type BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen, MyCoursesScreen, ProfileScreen } from '../screens';

// Interfaces
import { TabNavigationParamList } from './interface/types';

const Tab = createBottomTabNavigator<TabNavigationParamList, 'TabNavigationStack'>();

export const TabNavigationStack = () => {
    return (
        <Tab.Navigator
            id={'TabNavigationStack'}
            screenOptions={{
                tabBarButton: ({ children, style, onPress }: BottomTabBarButtonProps) => (
                    <TouchableOpacity onPress={onPress} style={[style, styles.tabItem]}>
                        {children}
                    </TouchableOpacity>
                ),
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
            <Tab.Screen
                name="MyCoursesScreen"
                component={MyCoursesScreen}
                options={{
                    title: 'Mis Cursos',
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: 'Perfil',
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabItem: {
        gap: 8,
    },
});
