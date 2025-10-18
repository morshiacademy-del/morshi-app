// Libraries
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

// Constants
import { palette } from '../constants';

interface IProps {
    title?: string;
    placeholder?: string;
    propsInput?: TextInput['props'];
    renderIcon?: React.JSX.Element;
}

export const TextInputComponent = (props: IProps) => {
    const { title, placeholder, propsInput, renderIcon = null } = props;

    return (
        <View
            style={{
                ...styles.contentSelect,
                borderColor: (propsInput?.value || '')?.length > 0 ? palette.blue : palette.disabled,
            }}
        >
            {title && <Text style={styles.titleField}>{title}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={palette.gray_2}
                {...propsInput}
            />
            {renderIcon}
        </View>
    );
};

const styles = StyleSheet.create({
    contentSelect: {
        alignItems: 'center',
        backgroundColor: palette.white,
        borderColor: palette.disabled,
        borderRadius: 8,
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 54,
        paddingHorizontal: 20,
    },
    input: {
        color: palette.black_2,
        flex: 1,
        flexShrink: 1,
        flexWrap: 'wrap',
        fontSize: 16,
        includeFontPadding: false,
        lineHeight: 20,
        paddingVertical: 0,
        textAlignVertical: 'center',
        verticalAlign: 'middle',
    },
    titleField: {
        color: palette.blue_2,
        fontSize: 18,
        lineHeight: 20,
    },
});
