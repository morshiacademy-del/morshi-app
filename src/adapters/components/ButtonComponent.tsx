// Libraries
import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    type TouchableOpacityProps,
    type StyleProp,
    type TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Constants - Utilities
import { palette } from '../constants';
import { fontFamilyApp } from '../utilities';

interface IProps {
    title: string;
    onPress: () => void;
    customStyle?: {
        button?: TouchableOpacityProps['style'];
        text?: StyleProp<TextStyle>;
    };
    propsButton?: TouchableOpacityProps;
    iconComponent?: React.ReactNode;
}

export const ButtonComponent = ({ title, onPress, customStyle, propsButton, iconComponent }: IProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[styles.button, customStyle?.button]}
            {...propsButton}
        >
            <LinearGradient
                colors={propsButton?.disabled ? [palette.disabled, palette.disabled] : [palette.blue, palette.blue_2]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                {iconComponent}
                <Text style={[styles.text, customStyle?.text]}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        height: 60,
        overflow: 'hidden',
        width: '100%',
    },
    gradient: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    text: {
        color: palette.white,
        fontSize: 18,
        fontFamily: fontFamilyApp[500],
    },
});
