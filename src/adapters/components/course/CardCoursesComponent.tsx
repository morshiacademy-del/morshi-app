// Libraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Constants - Utilities
import { fontFamilyApp } from '@/adapters/utilities';
import { palette, stylesShared } from '@/adapters/constants';

// Components
import { PreviewCourseImg } from '@/adapters/assets/images';

export const CardCoursesComponent = () => {
    return (
        <View style={[styles.content, stylesShared.shadow]}>
            <Image source={PreviewCourseImg} style={styles.image} />
            <Text style={styles.titleCourse}>Titulo del curso</Text>
            <Text style={styles.textInfo}>Nombre del tutor • 12 lecciones • 1 hr 20 min</Text>
            <Text style={styles.textPrice}>Gratis</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: palette.white,
        borderRadius: 20,
        gap: 12,
        paddingHorizontal: 14,
        paddingVertical: 24,
    },
    image: {
        borderRadius: 16,
        height: 200,
        resizeMode: 'cover',
        width: '100%',
    },
    titleCourse: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    textInfo: {
        color: palette.gray_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    textPrice: {
        color: palette.blue,
        fontFamily: fontFamilyApp[700],
        fontSize: 16,
    },
});
