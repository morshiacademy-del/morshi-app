// Libraries
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { ArrowRightIcon } from '@/adapters/assets/icons';
import { AppBarComponent, ViewResponsive } from '@/adapters/components';

// Constants - Utilities
import { palette } from '@/adapters/constants';
import { fontFamilyApp } from '@/adapters/utilities';

export const MyCoursesScreen = () => {
    const navigation = useNavigation();

    return (
        <ViewResponsive header={<AppBarComponent />}>
            <View style={styles.container}>
                <Text style={styles.titleSection}>Cursos inscritos</Text>
                <FlatList
                    data={Array.from({ length: 2 })}
                    keyExtractor={(_, index) => index.toString()}
                    contentContainerStyle={styles.containerFlatList}
                    renderItem={({ index }) => (
                        <TouchableOpacity
                            style={styles.contentItem}
                            activeOpacity={0.7}
                            onPress={() => navigation.navigate('HomeStack', { screen: 'DetailsEnrolledCoursesScreen' })}
                        >
                            <View style={styles._contentInfoItem}>
                                <Text style={styles._textTitleItem}>Curso {index + 1}</Text>
                                <Text style={styles._textDescriptionItem}>Edward Vega • 12 lecciones</Text>
                            </View>
                            <ArrowRightIcon fill={palette.black_2} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        paddingHorizontal: 24,
        paddingVertical: 18,
    },
    titleSection: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    containerFlatList: {
        gap: 14,
    },
    contentItem: {
        alignItems: 'center',
        backgroundColor: palette.gray_5,
        borderRadius: 12,
        flexDirection: 'row',
        gap: 8,
        paddingLeft: 14,
        paddingRight: 20,
        paddingVertical: 20,
    },
    _textTitleItem: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    _textDescriptionItem: {
        color: palette.gray_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    _contentInfoItem: {
        flex: 1,
        flexShrink: 1,
        gap: 8,
    },
});
