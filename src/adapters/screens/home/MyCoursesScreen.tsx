// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import { AppBarComponent, ViewResponsive } from '@/adapters/components';

export const MyCoursesScreen = () => {
    return (
        <ViewResponsive header={<AppBarComponent />}>
            <View style={styles.container}>
                <Text>M I S - C U R S O S</Text>
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
