// Libraries
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { type BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen, MyCoursesScreen, ProfileScreen } from '../screens';

// Interfaces
import { TabNavigationParamList } from './interface/types';

// Constants - Utilities
import { HEIGHT_TAB_NAVIGATION, palette } from '../constants';
import { fontFamilyApp } from '../utilities';

// Components
import { BookIcon, HomeIcon, UserIcon } from '../assets/icons';

const Tab = createBottomTabNavigator<TabNavigationParamList, 'TabNavigationStack'>();

const CustomTab = ({ state, descriptors, navigation }: BottomTabBarProps) => (
    <View style={styles.floatingTabBar}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const isFocused = state.index === index;
            const colorTab = isFocused ? palette.white : palette.gray_2;
            const borderBottomColor = isFocused ? palette.white : 'transparent';
            const label =
                options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                      ? options.title
                      : route.name;

            return (
                <TouchableOpacity
                    key={route.key}
                    onPress={() => navigation.navigate(route.name)}
                    style={{ ...styles.contentItemTab, borderBottomColor }}
                >
                    {options.tabBarIcon && options.tabBarIcon({ color: colorTab, focused: isFocused, size: 24 })}
                    <Text style={{ ...styles.textTab, color: colorTab }}>{label.toString()}</Text>
                </TouchableOpacity>
            );
        })}
    </View>
);

export const TabNavigationStack = () => {
    return (
        <Tab.Navigator
            id={'TabNavigationStack'}
            tabBar={props => <CustomTab {...props} />}
            screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: palette.white } }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size }) => <HomeIcon stroke={color} height={size} />,
                }}
            />
            <Tab.Screen
                name="MyCoursesScreen"
                component={MyCoursesScreen}
                options={{
                    title: 'Mis Cursos',
                    tabBarIcon: ({ color, size }) => <BookIcon fill={color} stroke={color} height={size} />,
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => <UserIcon fill={color} stroke={color} height={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    floatingTabBar: {
        alignItems: 'center',
        backgroundColor: palette.black_2,
        borderRadius: 14,
        bottom: 30,
        flexDirection: 'row',
        gap: 30,
        height: HEIGHT_TAB_NAVIGATION,
        justifyContent: 'space-around',
        left: 20,
        paddingHorizontal: 40,
        position: 'absolute',
        right: 20,

        // Shadow para Android/iOS
        elevation: 5,
        shadowColor: palette.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    contentItemTab: {
        alignItems: 'center',
        borderBottomWidth: 3,
        flex: 1,
        gap: 4,
        height: '100%',
        justifyContent: 'center',
    },
    textTab: {
        fontSize: 12,
        fontFamily: fontFamilyApp[700],
    },
});
