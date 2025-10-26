// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Constants - Utilities
import { palette } from '@/adapters/constants';
import { fontFamilyApp } from '@/adapters/utilities';

// Components
import { AccordionComponent } from '../AccordionComponent';
import { IntroductionCourseComponent } from './IntroductionCourseComponent';
import { AvatarIcon, CertificateIcon, LevelIcon, TimeIcon } from '@/adapters/assets/icons';

export const DetailsCourseComponent = () => {
    return (
        <>
            <View style={styles.contentShared}>
                <Text style={styles._titleSection}>¿Qué aprenderás?</Text>
                <Text style={styles.textDescriptionShared}>
                    Description text about something on this page that can be long or short. It can be pretty long and
                    explaining information about.
                </Text>
            </View>
            <View style={styles.contentShared}>
                <View style={styles._contentItemInformation}>
                    <TimeIcon stroke={palette.black_2} />
                    <Text style={styles._textItemInformation}>24 semanas</Text>
                </View>
                <View style={styles._contentItemInformation}>
                    <CertificateIcon fill={palette.black_2} />
                    <Text style={styles._textItemInformation}>Certificado al finalizar</Text>
                </View>
                <View style={styles._contentItemInformation}>
                    <LevelIcon fill={palette.black_2} />
                    <Text style={styles._textItemInformation}>Nivel inicial</Text>
                </View>
            </View>
            <View style={styles.contentShared}>
                <Text style={styles._titleSection}>¿Quién te enseñará?</Text>
                <View style={styles.contentTeacher}>
                    <AvatarIcon height={40} width={40} />
                    <View style={styles._contentInfoTeacher}>
                        <Text style={styles._textTeacherName}>Nombre del tutor</Text>
                        <Text style={styles._textPositionTeacher}>Profesión u ocupación</Text>
                    </View>
                </View>
            </View>
            <IntroductionCourseComponent title="Introducción al curso" subTitle="Preámbulo" />

            <View style={styles.contentShared}>
                <Text style={styles._titleSection}>Plan de estudios</Text>
                <Text style={styles.textDescriptionShared}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </Text>
            </View>
            <View style={styles.contentShared}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <AccordionComponent key={index} title={'Título ' + (index + 1)} subtitle={'Clase ' + (index + 1)}>
                        <Text style={styles.textDescriptionShared}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                            odit aut fugit. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                            suscipit laboriosam. Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                        </Text>
                    </AccordionComponent>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    _titleSection: {
        color: palette.black_2,
        fontSize: 18,
        fontFamily: fontFamilyApp[700],
    },
    contentShared: {
        gap: 14,
    },
    textDescriptionShared: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    _contentItemInformation: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    _textItemInformation: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[500],
        fontSize: 18,
    },
    contentTeacher: {
        alignItems: 'center',
        backgroundColor: palette.blue_3,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 12,
        padding: 20,
    },
    _contentInfoTeacher: {
        gap: 4,
        flexShrink: 1,
        flex: 1,
    },
    _textTeacherName: {
        color: palette.white,
        fontFamily: fontFamilyApp[700],
        fontSize: 18,
    },
    _textPositionTeacher: {
        color: palette.white,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
});
