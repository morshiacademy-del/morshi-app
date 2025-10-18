// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { BannerLoginIcon } from '@/adapters/assets/icons';
import { ButtonComponent } from '@/adapters/components';

// Constants - Utilities
import { palette } from '@/adapters/constants';
import { fontFamilyApp } from '@/adapters/utilities';

export const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <BannerLoginIcon />
            <Text style={styles.title}>¡Bienvenido! </Text>
            <Text style={styles.description}>Estas a tiempo de iniciar en el mundo de la perfección matemática</Text>
            <ButtonComponent
                title="Ya tengo una cuenta"
                onPress={() => navigation.navigate('AuthStack', { screen: 'LoginScreen' })}
                customStyle={{ button: { width: '90%' } }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    title: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[700],
        fontSize: 30,
        marginBottom: 10,
        marginTop: 50,
    },
    description: {
        color: palette.black_2,
        fontFamily: fontFamilyApp[500],
        fontSize: 18,
        marginBottom: 50,
        textAlign: 'center',
    },
});
