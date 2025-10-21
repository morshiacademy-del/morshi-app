// Libraries
import React, { PropsWithChildren, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';

// Constants - Utilities
import { fontFamilyApp } from '../utilities';
import { palette, stylesShared } from '../constants';

// Components
import { ArrowBottomIcon, ArrowTopIcon } from '../assets/icons';

interface IProps {
    title: string;
    subtitle?: string;
}

export const AccordionComponent = ({ title, subtitle, children }: PropsWithChildren<IProps>) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setOpen(v => !v);
    };

    return (
        <View style={[styles.container, stylesShared.shadow]}>
            <TouchableOpacity activeOpacity={0.8} onPress={handleClick} style={styles.button}>
                <View style={styles.contentText}>
                    {subtitle && <Text style={styles._subtitle}>{subtitle}</Text>}
                    <Text style={styles._title}>{title}</Text>
                </View>
                {open ? <ArrowTopIcon fill={palette.black_2} /> : <ArrowBottomIcon fill={palette.black_2} />}
            </TouchableOpacity>

            {open && <View>{children}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.white,
        borderRadius: 10,
        gap: 20,
        padding: 16,
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    contentText: {
        flex: 1,
        flexShrink: 1,
        gap: 4,
    },
    _subtitle: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[400],
        fontSize: 12,
    },
    _title: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 17,
    },
});
