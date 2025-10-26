// Libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { PreviewCourseImg } from '@/adapters/assets/images';
import { SharedIcon, StarIcon } from '@/adapters/assets/icons';
import { ButtonBackComponent, ButtonComponent, ViewResponsive, DetailsCourseComponent } from '@/adapters/components';

// Constants - Utilities
import { fontFamilyApp } from '@/adapters/utilities';
import { palette, stylesShared } from '@/adapters/constants';

export const CourseDetailsScreen = () => {
    const navigation = useNavigation();

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
            footer={
                <View style={styles.footer}>
                    <View>
                        <Text style={styles._textTitlePriceFooter}>Valor del curso</Text>
                        <Text style={styles._textPriceFooter}>Gratis</Text>
                    </View>
                    <ButtonComponent
                        title="Iniciar"
                        onPress={() => null}
                        customStyle={{ button: { height: 48, width: 160 } }}
                    />
                </View>
            }
        >
            <ScrollView>
                <Image source={PreviewCourseImg} style={styles.image} resizeMode="cover" />
                <View style={styles.contentBody}>
                    <Text style={styles._titleCourse}>Titulo del curso</Text>
                    <DetailsCourseComponent />
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
    footer: {
        alignItems: 'center',
        backgroundColor: palette.white,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        width: '100%',
    },
    _textTitlePriceFooter: {
        color: palette.gray_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    _textPriceFooter: {
        color: palette.blue,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
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
});
