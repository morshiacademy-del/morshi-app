// Libraries
import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Constants - Utilities
import { palette } from '@/adapters/constants';
import { fontFamilyApp } from '@/adapters/utilities';

// Components
import { PreviewCourseImg } from '@/adapters/assets/images';

export const CoursesFeaturedComponent = () => {
    return (
        <FlatList
            horizontal={true}
            keyExtractor={item => item.key}
            data={[{ key: 'Inicio' }, { key: 'Mis Cursos' }, { key: 'Perfil' }]}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.containerFlatList}
            renderItem={({ item }) => (
                <View style={styles.cardCoursesFeatured}>
                    <ImageBackground source={PreviewCourseImg} resizeMode="cover" style={styles._imageCard}>
                        <LinearGradient
                            colors={['rgba(10,16,30,0)', 'rgba(10,16,30,1)']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            locations={[0, 1]}
                            style={styles._gradientCard}
                        >
                            <Text style={styles._textCard}>{item.key}</Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    containerFlatList: {
        gap: 12,
        paddingHorizontal: 24,
    },
    cardCoursesFeatured: {
        borderRadius: 16,
        height: 260,
        overflow: 'hidden',
        width: 178,
    },
    _imageCard: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    _textCard: {
        color: palette.white,
        fontFamily: fontFamilyApp[500],
        fontSize: 18,
    },
    _gradientCard: {
        height: 80,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
});
