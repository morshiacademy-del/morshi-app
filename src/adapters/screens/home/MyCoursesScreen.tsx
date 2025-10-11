// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const MyCoursesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>M I S - C U R S O S</Text>
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
