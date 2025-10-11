// Libraries
import React from 'react';
import { RootStack } from '@/adapters/navigation';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

export default function App() {
    const navigationRef = useNavigationContainerRef();

    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack />
        </NavigationContainer>
    );
}
