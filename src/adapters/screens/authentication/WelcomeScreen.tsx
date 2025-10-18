// Libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import { BannerLoginIcon } from '@/adapters/assets/icons';
import { ButtonComponent } from '@/adapters/components';

// Constants
import { palette } from '@/adapters/constants';

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
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginTop: 50,
        marginBottom: 10,
        color: palette.black_2,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 50,
        color: palette.black_2,
    },
});
