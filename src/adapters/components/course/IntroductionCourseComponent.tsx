// Libraries
import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Components
import { PlayVideoIcon } from '@/adapters/assets/icons';
import { PreviewCourseImg } from '@/adapters/assets/images';

// Constants - Utilities
import { fontFamilyApp } from '@/adapters/utilities';
import { palette, stylesShared } from '@/adapters/constants';

interface IProps {
    title: string;
    subTitle?: string;
    onPlayVideo?: () => void;
}

export const IntroductionCourseComponent = ({ title, children, subTitle, onPlayVideo }: PropsWithChildren<IProps>) => {
    return (
        <View style={[styles.contentMain, stylesShared.shadow]}>
            <View style={styles.contentIntroductionCourse}>
                <Image source={PreviewCourseImg} style={styles.contentImage} />
                <View style={styles.contentText}>
                    <Text style={styles.textTitle}>{title}</Text>
                    <Text style={styles.textSubTitle}>{subTitle}</Text>
                </View>
                <TouchableOpacity onPress={onPlayVideo} activeOpacity={0.7}>
                    <PlayVideoIcon />
                </TouchableOpacity>
            </View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    contentMain: {
        backgroundColor: palette.white,
        borderRadius: 10,
        gap: 14,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    contentIntroductionCourse: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 14,
    },
    contentImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    contentText: {
        gap: 4,
        flexShrink: 1,
        flex: 1,
    },
    textTitle: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 14,
    },
    textSubTitle: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
});
