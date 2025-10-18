// Libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { PasswordBlockIcon, PasswordIcon } from '@/adapters/assets/icons';
import { ButtonBackComponent, ButtonComponent, TextInputComponent, ViewResponsive } from '@/adapters/components';

// Constants
import { palette } from '@/adapters/constants';

export const LoginScreen = () => {
    const navigation = useNavigation();
    const [state, setState] = useState({
        correo: '',
        password: '',
        showPassword: false,
    });

    return (
        <ViewResponsive background={palette.white}>
            <View style={styles.container}>
                <ButtonBackComponent onPress={() => navigation.goBack()} />
                <Text style={styles.title}>¡Hola! Me alegra volver a verte.</Text>
                <View style={styles.contentFields}>
                    <TextInputComponent
                        placeholder="Ingresa tu usuario o correo"
                        propsInput={{
                            value: state.correo,
                            onChangeText: text =>
                                setState(prevState => ({ ...prevState, correo: text.replace(/\s+/g, '') })),
                            autoCapitalize: 'none',
                        }}
                    />
                    <TextInputComponent
                        placeholder="Ingresa tu contraseña"
                        propsInput={{
                            value: state.password,
                            onChangeText: text =>
                                setState(prevState => ({ ...prevState, password: text.replace(/\s+/g, '') })),
                            autoCapitalize: 'none',
                            secureTextEntry: !state.showPassword,
                        }}
                        renderIcon={
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.contentIcon}
                                onPress={() =>
                                    setState(prevState => ({ ...prevState, showPassword: !prevState.showPassword }))
                                }
                            >
                                {state.showPassword ? (
                                    <PasswordIcon fill={palette.black_2} />
                                ) : (
                                    <PasswordBlockIcon fill={palette.black_2} />
                                )}
                            </TouchableOpacity>
                        }
                    />
                </View>
                <ButtonComponent
                    title="Iniciar sesión"
                    onPress={() => navigation.navigate('HomeStack' as never)}
                    propsButton={{ disabled: state.correo.length === 0 || state.password.length === 0 }}
                />
            </View>
        </ViewResponsive>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 40,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingTop: 50,
    },
    title: {
        color: palette.black_2,
        fontSize: 30,
    },
    contentFields: {
        gap: 14,
    },
    contentIcon: {
        paddingLeft: 10,
    },
});
