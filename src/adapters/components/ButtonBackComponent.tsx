// Libraries
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Components
import { ArrowLeftIcon } from '../assets/icons';

// Constants
import { palette } from '../constants';

interface IProps {
    onPress: () => void;
}

export const ButtonBackComponent = ({ onPress }: IProps) => {
    return (
        <TouchableOpacity style={styles.content} onPress={onPress} activeOpacity={0.7}>
            <ArrowLeftIcon fill={palette.black_2} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        borderColor: palette.gray_3,
        borderRadius: 8,
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
        width: 40,
    },
});
