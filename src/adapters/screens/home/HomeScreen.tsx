// Libraries
import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

// Components
import { AppBarComponent, CardCoursesComponent, CoursesFeaturedComponent, ViewResponsive } from '@/adapters/components';

// Utilities - Constants
import { fontFamilyApp } from '@/adapters/utilities';
import { HEIGHT_TAB_NAVIGATION, palette } from '@/adapters/constants';

const PADDING_HORIZONTAL = 24;

export const HomeScreen = () => {
    return (
        <ViewResponsive header={<AppBarComponent />}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.titleSection}>Cursos destacados</Text>
                <CoursesFeaturedComponent />

                <Text style={styles.titleSection}>Cursos</Text>
                <View style={styles.contentCourses}>
                    {Array.from({ length: 2 }).map((item, index) => (
                        <CardCoursesComponent key={index} />
                    ))}
                </View>
            </ScrollView>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: HEIGHT_TAB_NAVIGATION + 24,
    },
    titleSection: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingVertical: 18,
    },
    contentCourses: {
        paddingHorizontal: PADDING_HORIZONTAL,
        gap: 24,
    },
});
