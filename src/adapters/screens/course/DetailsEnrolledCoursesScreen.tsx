// Libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { PreviewCourseImg } from '@/adapters/assets/images';
import { SharedIcon, StarIcon, UploadIcon } from '@/adapters/assets/icons';
import {
    AnimatedSegmentedComponent,
    ButtonBackComponent,
    ButtonComponent,
    DetailsCourseComponent,
    IntroductionCourseComponent,
    ViewResponsive,
} from '@/adapters/components';

// Constants - Utilities
import { fontFamilyApp } from '@/adapters/utilities';
import { palette, stylesShared } from '@/adapters/constants';

const optionsSection = ['Grabaciones', 'Resumen'];

export const DetailsEnrolledCoursesScreen = () => {
    const navigation = useNavigation();
    const [sectionGoals, setSectionGoals] = useState('Grabaciones');

    return (
        <ViewResponsive
            background={palette.white}
            header={
                <View style={styles.header}>
                    <ButtonBackComponent onPress={() => navigation.goBack()} />
                    <View style={styles.contentIcons}>
                        <TouchableOpacity style={stylesShared.contentIcon} activeOpacity={0.7}>
                            <SharedIcon fill={palette.black_2} />
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesShared.contentIcon} activeOpacity={0.7}>
                            <StarIcon stroke={palette.black_2} />
                        </TouchableOpacity>
                    </View>
                </View>
            }
        >
            <ScrollView>
                <Image source={PreviewCourseImg} style={styles.image} resizeMode="cover" />
                <View style={styles.contentBody}>
                    <Text style={styles._titleCourse}>Titulo del curso</Text>
                    <IntroductionCourseComponent title="Introducción al curso" subTitle="Preámbulo" />
                    <AnimatedSegmentedComponent options={optionsSection} onSelect={value => setSectionGoals(value)} />
                    {sectionGoals.toLowerCase() === 'grabaciones' &&
                        Array.from({ length: 4 }).map((_, index) => (
                            <IntroductionCourseComponent key={index} title="Introducción al curso" subTitle="Preámbulo">
                                <View style={styles.contentMainStatus}>
                                    <View>
                                        <Text style={styles._textTileDateLimit}>Fecha límite de entrega:</Text>
                                        <Text style={styles._textDateLimit}>DD/MM/AAAA</Text>
                                    </View>
                                    <ButtonComponent
                                        title="Realizar entrega"
                                        onPress={() => {}}
                                        iconComponent={<UploadIcon stroke={palette.white} />}
                                        customStyle={{ button: { width: 150, height: 40 }, text: { fontSize: 12 } }}
                                    />
                                </View>
                            </IntroductionCourseComponent>
                        ))}

                    {sectionGoals.toLowerCase() === 'resumen' && <DetailsCourseComponent />}
                </View>
            </ScrollView>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 70,
        paddingHorizontal: 24,
        paddingVertical: 14,
        width: '100%',
    },
    contentIcons: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 'auto',
    },
    image: {
        height: 240,
        width: '100%',
    },
    contentBody: {
        gap: 30,
        padding: 24,
    },
    _titleCourse: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    contentMainStatus: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
    },
    _textTileDateLimit: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 14,
    },
    _textDateLimit: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 16,
    },
});
