// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>I N I C I O</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
