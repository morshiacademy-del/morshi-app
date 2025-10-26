// Libraries
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, LayoutChangeEvent } from 'react-native';

// Constants - Utilities
import { palette } from '../constants';
import { fontFamilyApp } from '../utilities';

interface IProps {
    options: string[];
    onSelect?: (option: string) => void;
}

export const AnimatedSegmentedComponent = ({ options, onSelect }: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [tabWidth, setTabWidth] = useState(0);
    const translateX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(translateX, {
            toValue: selectedIndex * tabWidth,
            useNativeDriver: true,
        }).start();
    }, [selectedIndex, tabWidth]);

    const handleLayout = (event: LayoutChangeEvent) => {
        const { width } = event.nativeEvent.layout;
        setTabWidth(width / options.length);
    };

    const handlePress = (index: number) => {
        setSelectedIndex(index);
        onSelect?.(options[index]);
    };

    return (
        <View style={styles.contentMain}>
            <View onLayout={handleLayout} style={styles.contentChildren}>
                <Animated.View
                    style={[
                        styles.activeBackground,
                        {
                            width: tabWidth,
                            transform: [{ translateX }],
                        },
                    ]}
                />
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={option}
                        style={styles.tab}
                        activeOpacity={0.8}
                        onPress={() => handlePress(index)}
                    >
                        <Text style={[styles.textOption, index === selectedIndex && styles._textOptionActive]}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contentMain: {
        backgroundColor: palette.gray_4,
        borderRadius: 10,
        height: 64,
        overflow: 'hidden',
        padding: 10,
    },
    contentChildren: {
        flexDirection: 'row',
        height: '100%',
        position: 'relative',
        width: '100%',
    },
    activeBackground: {
        backgroundColor: palette.white,
        borderRadius: 10,
        elevation: 2,
        height: '100%',
        position: 'absolute',
        zIndex: 0,
    },
    tab: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        zIndex: 1,
    },
    textOption: {
        fontSize: 16,
        fontFamily: fontFamilyApp[400],
        color: palette.black,
        textAlign: 'center',
    },
    _textOptionActive: {
        fontFamily: fontFamilyApp[700],
        color: palette.black_2,
    },
});
