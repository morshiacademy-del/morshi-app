import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserIcon } from '@/adapters/assets/icons';

export default function App() {
    return (
        <View style={styles.container}>
            <Text> up App.tsx to start working on your app!</Text>
            <UserIcon />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
