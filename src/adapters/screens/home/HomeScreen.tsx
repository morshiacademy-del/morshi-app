// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import { AppBarComponent, ViewResponsive } from '@/adapters/components';

export const HomeScreen = () => {
    return (
        <ViewResponsive header={<AppBarComponent />}>
            <View style={styles.container}>
                <Text>I N I C I O</Text>
            </View>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
