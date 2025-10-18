// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { AvatarIcon } from '../assets/icons';
import { ButtonBackComponent, TextInputComponent, ViewResponsive } from '../components';

// Utilities - Constants
import { fontFamilyApp } from '../utilities';
import { palette } from '../constants';

export const DetailsProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <ViewResponsive
            background={palette.white}
            header={
                <View style={styles.header}>
                    <ButtonBackComponent onPress={() => navigation.goBack()} />
                    <Text style={styles._textHeader}>Datos personales</Text>
                </View>
            }
        >
            <View style={styles.contentBody}>
                <AvatarIcon height={80} width={80} />
                <Text style={styles._textNameUser}>Edward Vega</Text>
                <Text style={styles._textMail}>ejemplo@correo.com</Text>
                <View style={styles._contentForm}>
                    <TextInputComponent propsInput={{ value: 'Edward Vega', editable: false }} />
                    <TextInputComponent propsInput={{ value: '300 245 2012', editable: false }} />
                    <TextInputComponent propsInput={{ value: 'ejemplo@correo.com', editable: false }} />
                    <TextInputComponent propsInput={{ value: 'Masculino', editable: false }} />
                </View>
            </View>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        height: 75,
        paddingHorizontal: 24,
        paddingVertical: 14,
    },
    _textHeader: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 20,
    },
    contentBody: {
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 30,
    },
    _textNameUser: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 30,
        marginBottom: 8,
        marginTop: 13,
    },
    _textMail: {
        color: palette.gray_2,
        fontFamily: fontFamilyApp[500],
        fontSize: 18,
    },
    _contentForm: {
        gap: 14,
        marginTop: 34,
        width: '100%',
    },
});
