/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-namespace */

import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
    WelcomeScreen: undefined;
    LoginScreen: undefined;
};

export type TabNavigationParamList = {
    HomeScreen: undefined;
    MyCoursesScreen: undefined;
    ProfileScreen: undefined;
};

export type HomeStackParamList = {
    TabNavigationStack: NavigatorScreenParams<TabNavigationParamList>;
};

export type RootStackParamList = {
    AuthStack: NavigatorScreenParams<AuthStackParamList>;
    HomeStack: NavigatorScreenParams<HomeStackParamList>;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
