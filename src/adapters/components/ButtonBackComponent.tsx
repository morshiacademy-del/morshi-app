// Libraries
import React from 'react';
import { TouchableOpacity } from 'react-native';

// Components
import { ArrowLeftIcon } from '../assets/icons';

// Constants
import { palette, stylesShared } from '../constants';

interface IProps {
    onPress: () => void;
}

export const ButtonBackComponent = ({ onPress }: IProps) => {
    return (
        <TouchableOpacity style={stylesShared.contentIcon} onPress={onPress} activeOpacity={0.7}>
            <ArrowLeftIcon fill={palette.black_2} />
        </TouchableOpacity>
    );
};
